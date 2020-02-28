import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerResolver implements Resolve<{id: number, name:string, status:string}> {
    
    constructor(private serverService : ServersService){

    }

    resolve(route : ActivatedRouteSnapshot, state: RouterStateSnapshot) : 
    Observable<{id: number, name:string, status:string}> |
     Promise<{id: number, name:string, status:string}> | 
     {id: number, name:string, status:string} {
        return this.serverService.getServer(+route.params['id']);
    }
}