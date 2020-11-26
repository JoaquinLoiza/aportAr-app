import { Injectable } from '@angular/core';
import { Institution } from './institution-list/institution';

@Injectable({
  providedIn: 'root'
})
export class SolidarityTruckService {

  truckBox: Institution[] = [];

  constructor() { }

  addToTruck(institution: Institution): void {
    let item: Institution = this.truckBox.find((v1) => v1.name == institution.name);
    if (!item) {
      this.truckBox.push({...institution});
    } else {
      item.quantity += institution.quantity;
    } 
  }
}
