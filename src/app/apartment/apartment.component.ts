import { Component } from '@angular/core';
import { Structure } from '../structure';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements Structure{
  
  static BASE_EFFICIENCY: number = 4;
  static BASE_CAPACITY: number = 4;
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
    if(this.workers == ApartmentComponent.BASE_CAPACITY*this.level){
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
    return this.workers*ApartmentComponent.BASE_EFFICIENCY;
  }
  getCapacity(): number {
    return this.level*ApartmentComponent.BASE_CAPACITY;
  }
  expand(): boolean {
    this.level++;
    return true;
  }
}
