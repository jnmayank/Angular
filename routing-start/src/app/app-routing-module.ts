import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth.guard.service";
import { canDecativateGuard } from "./servers/edit-server/can-deacivate-guard.service";
import { ServerResolver } from "./servers/edit-server/server-resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'users', component: UsersComponent, children:[
      { path: ':id/:name', component: UserComponent } //passing route-parmas to router.
    ]},
    { path: 'servers', 
      //canActivate: [AuthGuard], // along with this route all its child routes are also provtected.
      canActivateChild: [AuthGuard],
      component: ServersComponent,
      children:[
      { path: ':id/edit', component: EditServerComponent, canDeactivate:[canDecativateGuard]},
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}
    ]},
    { path: 'not-found', component: PageNotFoundComponent, 
      data:{message: 'page not found!'}}, // passing static data
    { path: '**', redirectTo: '/not-found'} // should be the last route. will catch all non matching route.
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes) // registering the routes.
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}