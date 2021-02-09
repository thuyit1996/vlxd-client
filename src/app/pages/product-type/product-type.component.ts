import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-product-type',
  template: '<router-outlet></router-outlet>',
})
export class ProductTypeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    console.log(123);
    
  }

}
