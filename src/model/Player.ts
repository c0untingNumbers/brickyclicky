import Apartment from './Apartment';
import Factory from './Factory';
import Land from './Land';
import { Structure } from './Structure';

class Player {
  private numBricks: number = 0;

  click(): void {
    this.numBricks++;
  }
  work(): void {
    const income = this.getTotalEfficiency() / (60 / 2.5);
    this.numBricks += income;
  }

  getTotalEfficiency(): number {
    return (
      Land.getEfficiency() + Apartment.getEfficiency() + Factory.getEfficiency()
    );
  }

  moveWorkers(to: Structure, amount: number): boolean {
    if (!Land.removeWorkers(amount)) {
      const remaining = Land.getNumWorkers();
      this.moveWorkers(to, remaining);
    }
    if (!to.addWorkers(amount)) {
      Land.addWorkers(amount);
      const remaining = to.getCapacity() - to.getNumWorkers();
      this.moveWorkers(to, remaining);
    }
    return true;
  }

  getNumBricks(): number {
    return this.numBricks;
  }

  spend(amount: number): void {
    this.numBricks -= amount;
  }
}

export default new Player();
