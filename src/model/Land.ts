import { Structure } from './Structure';

export class Land implements Structure {
  static readonly BASE_EFFICIENCY: number = 2;
  static readonly CAPACITY = 10;
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
    if (this.workers + num > Land.CAPACITY) return false;

    this.workers += num;
    return true;
  }

  removeWorkers(num: number): boolean {
    if (this.workers - num < 0) {
      return false;
    }
    this.workers -= num;
    return true;
  }

  getEfficiency(): number {
    return this.workers * Land.BASE_EFFICIENCY;
  }

  getCapacity(): number {
    return -1;
  }

  expand(): boolean {
    return false;
  }

  getLevel(): number {
    return this.level;
  }
}

export default new Land();
