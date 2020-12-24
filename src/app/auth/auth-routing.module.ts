import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './reactive/login/login.component';
import { ReactregistrationComponent } from './reactive/reactregistration/reactregistration.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login', component: ReactregistrationComponent },
  { path: 'registration', component: ReactregistrationComponent }

  //{path:'**', component:PagenotfoundComponent}
   //{path:'registration',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule { }
export const routingComponents = [LoginComponent,ReactregistrationComponent];