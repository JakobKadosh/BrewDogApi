import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/Beer';
@Injectable({
  providedIn: 'root'
})
export class BeerService {
beerInfo:any={
  selected:null
};
  constructor(private http:HttpClient) { }
  public getSpecificBeer(id:number):void{
    this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers/${id}`).subscribe(
      res=>{
        this.beerInfo.selected=res[0]
      },
      err=>{alert("ERROR!")}
    )
  }
}
