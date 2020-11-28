import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Institution } from './institution-list/institution';

@Injectable({
  providedIn: 'root'
})
export class SolidarityTruckService {

  private _truckBox: Institution[] = [];

  truckBox: BehaviorSubject<Institution[]> = new BehaviorSubject([]);

  constructor() { }

  addToTruck(institution: Institution): void {
    let item: Institution = this._truckBox.find((v1) => v1.name == institution.name);
    if (!item) {
      this._truckBox.push({...institution});
    } else {
      item.quantity += institution.quantity;
    }
    this.truckBox.next(this._truckBox); 
  }
}
