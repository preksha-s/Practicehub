import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent  {
public subjects=[
  {   
      "id":1,
     "language":"Pascal",
     "edition":"third"
  },
  {
    "id":2,
     "language":"Python",
     "edition":"four"
  },
  {
    "id":3,
     "language":"SQL",
     "edition":"second"
  },
  {
    "id":4,
     "language":"c",
     "edition":"second"
  },
  {
    "id":5,
     "language":"Cpp",
     "edition":"second"
  },
  {
    "id":6,
     "language":"java",
     "edition":"second"
  },
  {
    "id":7,
     "language":"java",
     "edition":"first"
  },
  {
    "id":8,
     "language":"Graphic Theory",
     "edition":"third"
  },
  {
    "id":9,
     "language":"Datastructures",
     "edition":"first"
  },
  {
    "id":10,
     "language":"oops",
     "edition":"third"
  },



];
}
