import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactregistrationComponent } from './reactive/reactregistration/reactregistration.component';
import { LoginComponent } from './reactive/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { TemplateLogin } from './template/login/templatelogin.component';



@NgModule({
  declarations: [LoginComponent, ReactregistrationComponent,TemplateLogin],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  exports:[
   LoginComponent,
    ReactregistrationComponent,
    TemplateLogin
  ]
})
export class AuthModule { }
