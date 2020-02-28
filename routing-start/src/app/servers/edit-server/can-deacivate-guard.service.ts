import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate {
    canDecativate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class canDecativateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?:RouterStateSnapshot): boolean | Observable<boolean>| Promise<boolean> {
        return component.canDecativate();
    }
    
}