import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  a:any
  b:any
  c:number=0

  constructor() 
  {
    console.log("constructor...")
  }

  ngOnInit(): void 
  {
    console.log("ngOnInit")
  }

  Addition()
  {
    console.log("Addition() called...")
    console.log("a = >",this.a)
    console.log("b = >",this.b)
    this.c = this.a + this.b
  }
  Subtraction()
  {
    console.log("Subtraction() called...")
    console.log("a = >",this.a)
    console.log("b = >",this.b)
    this.c = this.a - this.b
  }
  Multiplication()
  {
    console.log("Multiplication() called...")
    console.log("a = >",this.a)
    console.log("b = >",this.b)
    this.c = this.a * this.b
  }
  Division()
  {
    console.log("Division() called...")
    console.log("a = >",this.a)
    console.log("b = >",this.b)
    this.c = this.a / this.b
  }
  
}

