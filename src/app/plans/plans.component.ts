import { Plan } from './../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plans: Plan[] = [
    {
      name: '3-year plan',
      pricePerMonth: 3.49,
      discount: 70,
      totalPriceWithoutDiscount: '430.20',
      totalPriceWithDiscount: '125.64 billed every 3 years',
      exclusive : true
    },
    {
      name: '2-year plan',
      pricePerMonth: 4.99,
      discount: 58,
      totalPriceWithoutDiscount: '286.80',
      totalPriceWithDiscount: '119.76 billed every 2 years',
      exclusive : false
    },
    {
      name: '1-year plan',
      pricePerMonth: 6.99,
      discount: 41,
      totalPriceWithoutDiscount: '143.40',
      totalPriceWithDiscount: '83.88 billed every year',
      exclusive : false
    },
    {
      name: '1-month plan',
      pricePerMonth: 11.95,
      discount: 0,
      totalPriceWithoutDiscount: '11.95',
      totalPriceWithDiscount: '11.95 billed every month',
      exclusive : false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
