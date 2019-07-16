import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/shared/services/beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-beer',
  templateUrl: './select-beer.component.html',
  styleUrls: ['./select-beer.component.css']
})
export class SelectBeerComponent implements OnInit {
  id:number;
  constructor(private router:Router, private service:BeerService) { }

  ngOnInit() {
  }
  public setSelectedBeer(){
    this.service.getSpecificBeer(this.id)
    this.router.navigate(['show'])
  }
}
