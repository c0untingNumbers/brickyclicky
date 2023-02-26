import Apartment from './Apartment';
import Factory from './Factory';
import Land from './Land';
import Player from './Player';

export class Shop {
  upgradeApartment(): boolean {
    if (Player.getNumBricks() < 200) return false;
    Player.spend(200);
    return Apartment.expand();
  }

  upgradeFactory(): boolean {
    if (Player.getNumBricks() < 1000) return false;
    Player.spend(1000);
    return Factory.expand();
  }

  buyWorker(): boolean {
    if (Player.getNumBricks() < 50) return false;
    Player.spend(50);
    return Land.addWorkers(1);
  }
}

export default new Shop();
