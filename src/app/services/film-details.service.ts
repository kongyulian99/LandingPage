import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsService {

  constructor() { }

  productDetails = [
    {
      id:1,
      productName:"Tò he",
      productDetails:"Video về tò he",
      productUrl:"../../assets/video/tohe.mp4"
    }
  ]
}
