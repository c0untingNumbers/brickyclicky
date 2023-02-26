import { Structure } from './Structure';

class Apartment implements Structure {
  static readonly BASE_EFFICIENCY: number = 4;
  static readonly BASE_CAPACITY: number = 4;
  private level: number;
  private workers: number;

  constructor() {
    this.level = 0;
    this.workers = 0;
  }

  getNumWorkers(): number {
    return this.workers;
  }
  addWorkers(num: number): boolean {
    if (this.workers + num > Apartment.BASE_CAPACITY * this.level) return false;

    this.workers += num;
    return true;
  }
  removeWorkers(num: number): boolean {
    if (this.workers - num < 0) return false;

    this.workers -= num;
    return true;
  }

  getEfficiency(): number {
    return this.workers * Apartment.BASE_EFFICIENCY;
  }

  getCapacity(): number {
    return this.level * Apartment.BASE_CAPACITY;
  }

  expand(): boolean {
    this.level++;
    return true;
  }

  getLevel(): number {
    return this.level;
  }
}

export default new Apartment();
