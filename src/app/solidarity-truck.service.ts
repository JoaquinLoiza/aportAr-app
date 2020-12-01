import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Institution } from './institution-list/institution';

@Injectable({
  providedIn: 'root'
})
export class SolidarityTruckService {

  private _truckBox: Institution[] = [];
  private _total: number = 0;

  truckBox: BehaviorSubject<Institution[]> = new BehaviorSubject([]);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);
  
  constructor() { }

  addToTruck(institution: Institution): void {
    let item: Institution = this._truckBox.find((v1) => v1.name == institution.name);
    let quantity = Math.ceil(institution.quantity);

    if (!item) {
      institution.quantity = quantity;
      this._truckBox.push({...institution});
    } else {
      item.quantity += quantity;
    }
    this._total = this.totalPrice();
    this.total.next(this._total);
    this.truckBox.next(this._truckBox);
  }

  totalPrice(): number {
    let total: number = 0;
    this._truckBox.forEach(element => {
      total += (element.price * element.quantity);
    });
    return total;
  }
}
