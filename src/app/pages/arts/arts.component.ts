import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {
  constructor(private service: OrderDetailsService) {}
  products:any;
  ngOnInit() {
    this.products = this.service.productDetails;
  }
}
