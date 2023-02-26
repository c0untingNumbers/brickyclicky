import Apartment from './Apartment';
import Factory from './Factory';
import Land from './Land';
import { Structure } from './Structure';

class Player {
  numBricks: number = 0;

  work(): number {
    const income = this.getTotalEfficiency();
    this.numBricks += income;
    return income;
  }

  getTotalEfficiency(): number {
    return (
      Land.getEfficiency() + Apartment.getEfficiency() + Factory.getEfficiency()
    );
  }

  moveWorkers(to: Structure, from: Structure, amount: number) {
    if (to.addWorkers(amount)) {
      from.removeWorkers(amount);
    }
  }
}

export default new Player();
