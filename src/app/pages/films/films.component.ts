import { Component, OnInit } from '@angular/core';
import { FilmDetailsService } from 'src/app/services/film-details.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  constructor(private service: FilmDetailsService) {}
  products: any;
  ngOnInit(): void {
    this.products = this.service.productDetails;
  }
}
