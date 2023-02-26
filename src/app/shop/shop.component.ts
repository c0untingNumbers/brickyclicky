import { Component, Input, OnInit } from '@angular/core';
import Apartment from 'src/model/Apartment';
import Factory from 'src/model/Factory';
import Land from 'src/model/Land';
import Player from 'src/model/Player';
import Shop from 'src/model/Shop';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shopTitle = 'Shop';

  @Input() onBuy!: () => void;

  buyWorker!: () => void;
  buyApartment!: () => void;
  buyFactory!: () => void;
  addToApartment!: () => void;
  addToFactory!: () => void;

  workerTitle() {
    return `Worker${
      Land.getNumWorkers() > 0
        ? ` (${Land.getNumWorkers()}/${Land.getCapacity()})`
        : ''
    }`;
  }

  apartmentTitle() {
    return Apartment.getLevel() > 0
      ? `Apartment (${Apartment.getNumWorkers()}/${Apartment.getCapacity()})`
      : 'Apartment';
  }

  factoryTitle() {
    return Apartment.getLevel() > 0
      ? `Factory (${Factory.getNumWorkers()}/${Factory.getCapacity()})`
      : 'Factory';
  }

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

    this.addToApartment = () => {
      Player.moveWorkers(Apartment, Land.getNumWorkers());
    };

    this.addToFactory = () => {
      Player.moveWorkers(Factory, Land.getNumWorkers());
    };
  }

  constructor(private modelService: ModelService) {}
}
