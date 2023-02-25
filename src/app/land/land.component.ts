import { Component } from '@angular/core';
import { Structure } from '../structure';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements Structure{
  static BASE_EFFICIENCY: number = 1;
  static BASE_CAPACITY: number = 400;
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
    if(this.workers == LandComponent.BASE_CAPACITY*this.level){
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
    return this.workers*LandComponent.BASE_EFFICIENCY;
  }
  getCapacity(): number {
    return this.level*LandComponent.BASE_CAPACITY;
  }
  expand(): boolean {
    return false;
  }
}
