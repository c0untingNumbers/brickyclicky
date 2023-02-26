import { Component } from '@angular/core';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  shopTitle = 'Shop';

  workerTitle = 'Worker';
  workerCost = this.modelService.shop.getWorkerCost();
  apartmentTitle = 'Apartment';
  apartmentCost = this.modelService.shop.getApartmentCost();
  factoryTitle = 'Factory';
  factoryCost = this.modelService.shop.getFactoryCost();

  workerCount =
    this.modelService.factory.getNumWorkers() +
    this.modelService.apartment.getNumWorkers() +
    this.modelService.land.getNumWorkers();
  apartmentCount = this.modelService.apartment.getLevel();
  factoryCount = this.modelService.factory.getLevel();

  workerImg = 'assets/worker_icon.png';
  apartmentImg = 'assets/apt_icon.png';
  factoryImg = 'assets/factory_icon.png';

  constructor(private modelService: ModelService) {}
}
