import Apartment from './Apartment';
import Factory from './Factory';
import Land from './Land';
import { Structure } from './Structure';

class Player {
  private numBricks: number = 0;

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

  moveWorkers(to: Structure, from: Structure, amount: number): boolean {
    return to.addWorkers(amount) && from.removeWorkers(amount);
  }

  getNumBricks(): number {
    return this.numBricks;
  }
}

export default new Player();
