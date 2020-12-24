import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './auth/reactive/login/login.component';
import { TemplateLogin } from './auth/template/login/templatelogin.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CardsComponent } from './cards/cards.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { NgifComponent } from './directives/ngif/ngif.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/mainhome/home.component';


const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'Home',component:HomeComponent},
  {path:'custif',component:NgifComponent},
  {path:'custfor',component:NgforComponent},
  {path:'custclass',component:NgclassComponent},
  {path:'custstyle',component:NgstyleComponent},
  {path:'custlogin',component:LoginComponent},
  { path:'custtemplate',component:TemplateLogin},
  {path:'custbootstrap',component:BootstrapComponent},
  {path:'custcards',component:CardsComponent},
  {path:'custdisplay',component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//exports:[HomeComponent,NgifComponent,NgforComponent,NgstyleComponent,LoginComponent,TemplateLogin]