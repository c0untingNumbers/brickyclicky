import { Structure } from './Structure';

export class Factory implements Structure {
  static readonly BASE_EFFICIENCY: number = 10;
  static readonly BASE_CAPACITY: number = 20;
  private level: number;
  private workers: number;

  constructor() {
    this.level = 1;
    this.workers = 0;
  }

  getNumWorkers(): number {
    return this.workers;
  }

  addWorkers(num: number): boolean {
    if (this.workers + num > Factory.BASE_CAPACITY * this.level) return false;

    this.workers += num;
    return true;
  }

  removeWorkers(num: number): boolean {
    if (this.workers - num < 0) return false;

    this.workers -= num;
    return true;
  }

  getEfficiency(): number {
    return this.workers * Factory.BASE_EFFICIENCY;
  }

  getCapacity(): number {
    return this.level * Factory.BASE_CAPACITY;
  }

  expand(): boolean {
    this.level++;
    return true;
  }

  getLevel(): number {
    return this.level;
  }
}

export default new Factory();
