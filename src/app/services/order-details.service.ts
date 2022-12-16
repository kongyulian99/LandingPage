import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  productDetails = [
    {
      id:1,
      productName:"First",
      productDetails:"Tree Pain",
      productPrice:200,
      productUrl:"../../assets/img/art1.JPG"
    },
    {
      id:2,
      productName:"Veggie Supreme",
      productDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      productPrice:369,
      productUrl:"../../assets/img/IMG_0615.JPG"
    },
    {
      id:3,
      productName:"Paneer Burger",
      productDetails:"panner",
      productPrice:149,
      productUrl:"../../assets/img/IMG_0616.JPG"
    },
    {
      id:4,
      productName:"Veg Masala Roll In Naan",
      productDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      productPrice:140,
      productUrl:"../../assets/img/IMG_0617.JPG"
    },
    {
      id:5,
      productName:"Indulgence Brownie",
      productDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      productPrice:105,
      productUrl:"../../assets/img/IMG_0613.JPG"
    },
    {
      id:6,
      productName:"Oreo Cheesecake Ice Cream",
      productDetails:"Oreo ice cream",
      productPrice:219,
      productUrl:"../../assets/img/IMG_0614.JPG"
    }
  ]
}
