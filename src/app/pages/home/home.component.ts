import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: OrderDetailsService,
              private router: Router) { }
  productData: any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

  navigate(id: number) {
    console.log("cliecked")
    this.router.navigate(['arts/', id]);
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView();
  }
}
