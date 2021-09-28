import { Component, OnInit } from '@angular/core';
import { RSConverter } from './convertRS';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  inputNumber = 0;
  objConverter: RSConverter = new RSConverter(0, 0, 0, 0, 0);
  constructor() { }

  ngOnInit(): void {
  }

  currencyConverter() {

    if (this.inputNumber <= 0)
      alert("Enter Value Greaterthan 0");
    else {
      var dollar = Number((this.inputNumber / 74).toFixed(2));
      var euro = Number((this.inputNumber / 87).toFixed(2));
      var cdollar = Number((this.inputNumber / 59).toFixed(2));
      var hkdollar = Number((this.inputNumber / 9.5).toFixed(2));
      var mpeso = Number((this.inputNumber / 3.6).toFixed(2));

      alert(dollar);
      this.objConverter = new RSConverter(dollar, euro, cdollar, hkdollar, mpeso);

    }
  }
}