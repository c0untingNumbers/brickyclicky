import { Component } from '@angular/core';
import { Structure } from '../structure';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements Structure{
  static BASE_EFFICIENCY: number = 10;
  static BASE_CAPACITY: number = 20;
  private level: number;
  private workers: number;
  
  constructor(){
    this.level = 1;
    this.workers = 0;
  }


  getNumWorkers(): number {
    return this.workers;
  }
  addWorkers(workers: number): boolean {
    if(this.workers == FactoryComponent.BASE_CAPACITY*this.level){
      return false
    }else{
      this.workers++;
      return true;
    }
  }
  removeWorkers(workers: number): boolean {
    if(this.workers == 0){
      return false
    }else{
      this.workers--;
      return true;
    }
  }
  getEfficiency(): number {
    return this.workers*FactoryComponent.BASE_EFFICIENCY;
  }
  getCapacity(): number {
    return this.level*FactoryComponent.BASE_CAPACITY;
  }
  expand(): boolean {
    this.level++;
    return true;
  }
}
