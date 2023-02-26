import Apartment from './Apartment';
import Factory from './Factory';
import Land from './Land';
import Player from './Player';

export class Shop {
  upgradeApartment(): boolean {
    return Player.getNumBricks() < 10 ? false : Apartment.expand();
  }

  upgradeFactory(): boolean {
    return Player.getNumBricks() < 20 ? false : Factory.expand();
  }

  buyWorker(): boolean {
    return Player.getNumBricks() < 2 ? false : Land.addWorkers(1);
  }
}

export default new Shop();
