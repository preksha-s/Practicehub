import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-temp',
  templateUrl: './templatelogin.component.html',
  styleUrls: ['./templatelogin.component.css']
})
export class TemplateLogin  {

  topics=["Angular","React","vue"];
  topicHasErr=true;
  userModel=new User('','shd@de.com',9208,'default','morning',true);
  
  validateTopic(value:string){
    console.log(value);
    if(value === 'default'){
      this.topicHasErr=true;
    }else{
      this.topicHasErr=false;  
    }
  }
  
  onSubmit(){
  console.log(this.userModel);
  }
  
  }
  