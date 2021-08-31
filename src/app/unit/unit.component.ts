import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnitComponent {
  title = 'UnitConvert';
  val: any;
  ans: any;
  from!: string;
  to! : string ;
  cm()
  {
    this.from='Millimeter'
    this.to='Converted to Centimeter: '
    this.ans=this.val/10
  }

  m()
  {
    this.from='Centimeter'
    this.to='Converted to Meter'
    this.ans=this.val/100
  }
  km()
  {
    this.from='Meter'
    this.to='Converted to Kilometer'
    this.ans=this.val/1000
  }
  feet()
  {
    this.from='Inches'
    this.to='Converted to Feet'
    this.ans=this.val/12
  }
  yard()
  {
    this.from='Feet'
    this.to='Converted to Yard'
    this.ans=this.val/3
  }
}