import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
 public arraydata=[];

 data:any
  constructor() { }
  OnRegisterbtn(data){
    this.data=data;
    console.log(data);
    this.arraydata.push(data);
  }
getRegistrationData(){
  return (this.arraydata);
}

}
