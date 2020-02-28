import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deacivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  id : number;
  allowEdit : boolean = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.allowEdit = this.route.snapshot.queryParams['allowEdit']==1 ? true : false;
    this.server = this.serversService.getServer(this.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, 
      {name: this.serverName, status: this.serverStatus});
      this.changesSaved = true;
      this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDecativate () : boolean | Observable<boolean> | Promise<boolean>{
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm("Do you want to navigate away");
    } else {
      return true;
    }
  }

}
