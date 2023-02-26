import { Component, Input, OnInit } from '@angular/core';
import Shop from 'src/model/Shop';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shopTitle = 'Shop';

  workerTitle = 'Worker';
  apartmentTitle = 'Apartment';
  factoryTitle = 'Factory';

  @Input() onBuy!: () => void;

  buyWorker!: () => void;
  buyApartment!: () => void;
  buyFactory!: () => void;

  workerCost() {
    return Shop.getWorkerCost();
  }
  apartmentCost() {
    return Shop.getApartmentCost();
  }
  factoryCost() {
    return Shop.getFactoryCost();
  }

  workerCount() {
    return (
      this.modelService.factory.getNumWorkers() +
      this.modelService.apartment.getNumWorkers() +
      this.modelService.land.getNumWorkers()
    );
  }
  apartmentLevel() {
    return this.modelService.apartment.getLevel();
  }
  factoryLevel() {
    return this.modelService.factory.getLevel();
  }

  workerImg = 'assets/worker_icon.png';
  apartmentImg = 'assets/apt_icon.png';
  factoryImg = 'assets/factory_icon.png';

  ngOnInit(): void {
    this.buyWorker = () => {
      Shop.buyWorker();
    };

    this.buyApartment = () => {
      if (Shop.upgradeApartment()) this.onBuy();
    };

    this.buyFactory = () => {
      if (Shop.upgradeFactory()) this.onBuy();
    };
  }

  constructor(private modelService: ModelService) {}
}
