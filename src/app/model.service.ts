import { Injectable } from '@angular/core';
import Apartment from 'src/model/Apartment';
import Factory from 'src/model/Factory';
import Land from 'src/model/Land';
import Player from 'src/model/Player';
import Shop from 'src/model/Shop';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  readonly player = Player;
  readonly land = Land;
  readonly apartment = Apartment;
  readonly factory = Factory;
  readonly shop = Shop;
}
