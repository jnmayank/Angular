import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService : AuthService,
                private router : Router){   
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(childRoute, state);
    }
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return this.authService.isAuthenticated()
            .then(
                (authenticate: boolean) => {
                    if(authenticate) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            )
    }

}