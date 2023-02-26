import Apartment from './Apartment';
import Factory from './Factory';
import Land from './Land';
import Player from './Player';

export class Shop {
  private apartmentCost: number = 200;
  private workerCost: number = 50;
  private factoryCost: number = 1000;

  upgradeApartment(): boolean {
    if (Player.getNumBricks() < this.apartmentCost) return false;
    Player.spend(this.apartmentCost);
    this.apartmentCost *= 1.1;
    return Apartment.expand();
  }

  upgradeFactory(): boolean {
    if (Player.getNumBricks() < this.factoryCost) return false;
    Player.spend(this.factoryCost);
    this.factoryCost *= 1.1;
    return Factory.expand();
  }

  buyWorker(): boolean {
    if (Player.getNumBricks() < this.workerCost) return false;
    if (!Land.addWorkers(1)) {
      return false;
    }
    Player.spend(this.workerCost);
    this.workerCost *= 1.1;
    return true;
  }

  getWorkerCost(): number {
    return this.workerCost;
  }

  getApartmentCost(): number {
    return this.apartmentCost;
  }

  getFactoryCost(): number {
    return this.factoryCost;
  }
}

export default new Shop();
