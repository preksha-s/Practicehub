import { Component, ContentChild, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, AbstractControl, ControlContainer } from '@angular/forms';
import { AuthRoutingModule } from '../../auth-routing.module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(private fb:FormBuilder,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.minLength(8),this.EmailValidation.bind(this)]],
      password:['',[Validators.required,Validators.minLength(9),this.PasswordValidation.bind(this)]]
    })
  }
EmailValidation(control:AbstractControl){
  if(control.value){
    const pattern= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(!control.value.match(pattern)&& control.value!=''){
      return {invalidEmail:true};
    }
    return null;
  }
}
PasswordValidation(control:AbstractControl){
  if(control.value){
    const pattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
    if(!control.value.match(pattern) && control.value!=''){
      return {invalidPassword:true};
    }
    return null;

  }
}
onClickRegister(){
 //this.router.(['./registration']);
  this.route.navigate(['./registration']);
  
 }  
 


}
