import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrickComponent } from './brick/brick.component';
import { ShopComponent } from './shop/shop.component';
import { LandComponent } from './land/land.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { FactoryComponent } from './factory/factory.component';

@NgModule({
  declarations: [
    AppComponent,
    BrickComponent,
    ShopComponent,
    LandComponent,
    ApartmentComponent,
    FactoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
