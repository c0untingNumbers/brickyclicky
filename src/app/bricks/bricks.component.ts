import { Component } from '@angular/core';
import Player from 'src/model/Player';
import Shop from 'src/model/Shop';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-bricks',
  templateUrl: './bricks.component.html',
  styleUrls: ['./bricks.component.css'],
})
export class BricksComponent {
  // cost = this.modelService.shop.getWorkerCost();
  cost() {
    return Shop.getWorkerCost();
  }

  efficiency() {
    return Player.getTotalEfficiency();
  }

  constructor(private modelService: ModelService) {}
}
