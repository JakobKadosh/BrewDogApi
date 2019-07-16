import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SelectBeerComponent } from './select-beer/select-beer.component';
import { ShowBeerComponent } from './show-beer/show-beer.component';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes=[
  {path:"",component:SelectBeerComponent},
  {path:"select",component:SelectBeerComponent  },
  {path:"show",component:ShowBeerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SelectBeerComponent,
    ShowBeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
