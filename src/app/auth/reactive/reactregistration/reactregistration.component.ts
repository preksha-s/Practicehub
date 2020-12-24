import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, AbstractControl, ControlContainer } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { AuthRoutingModule } from '../../auth-routing.module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-reactregistration',
  templateUrl: './reactregistration.component.html',
  styleUrls: ['./reactregistration.component.css']
})

export class ReactregistrationComponent implements OnInit {
  reactregisterForm: FormGroup;
  userdata:any[];
  constructor(private fb:FormBuilder,private registrationservice:RegistrationService,private router:ActivatedRoute,private route:Router) { }


  ngOnInit() {
    console.log("preksha");
    this.reactregisterForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, this.emailValidation.bind(this)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.PasswordValidator.bind(this) });

  }


  
  emailValidation(control: AbstractControl) {
    if (control.value) {
      const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!control.value.match(pattern) && control.value !== '') {
        return { invalidEmail: true };
        console.log(control.value);
      }
      return null;
    }
  }

  PasswordValidator(control: AbstractControl) {
    if (this.reactregisterForm && this.reactregisterForm.get('password').value) {
      let password = this.reactregisterForm.get('password').value;
      let confirmPassword = control.value.confirmPassword;
      if (password != confirmPassword) {
        return { 'misMatch': true }      
      }      
    }
    else {
      return null;
    }    
  }
  onSubmit(){
      this.registrationservice.OnRegisterbtn(this. reactregisterForm.value);
   }
///show in arrray format
  onUsersData(){
    this.userdata=this.registrationservice.getRegistrationData();
    console.log(this.userdata);
  }
 goBackToLogin(){
  this.route.navigate(['./login']);
    
    
  } 

}
