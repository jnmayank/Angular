import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  edit: any;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this.server = this.serversService.getServer(id);
    this.edit = this.route.snapshot.queryParams['allowEdit'];

    this.route.params.subscribe(
      (params : Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    ); 
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"});
  }
}
