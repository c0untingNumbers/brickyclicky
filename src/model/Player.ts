import Apartment from './Apartment';
import Factory from './Factory';
import Land from './Land';
import { Structure } from './Structure';

class Player {
  private numBricks: number = 0;

  click(): void{
    this.numBricks++;
  } 
  work(): void {
    const income = this.getTotalEfficiency();
    this.numBricks += income;
  }

  getTotalEfficiency(): number {
    return (
      Land.getEfficiency() + Apartment.getEfficiency() + Factory.getEfficiency()
    );
  }

  moveWorkers(to: Structure, from: Structure, amount: number): boolean {
    if(!from.removeWorkers(amount)){
      return false;
    }
    if(!to.addWorkers(amount)){
      from.addWorkers(amount);
      return false;
    }
    return true;
  }

  getNumBricks(): number {
    return this.numBricks;
  }

  spend(amount: number): void{
    this.numBricks -= amount;
  }
}

export default new Player();
