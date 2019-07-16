import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/shared/models/Beer';
import { BeerService } from 'src/shared/services/beer.service';

@Component({
  selector: 'app-show-beer',
  templateUrl: './show-beer.component.html',
  styleUrls: ['./show-beer.component.css']
})
export class ShowBeerComponent implements OnInit {

  constructor(private beerSer:BeerService) { }

  ngOnInit() {
  }
  public selectedBeerInfo:Beer= this.beerSer.beerInfo;
}
