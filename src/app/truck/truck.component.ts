import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from '../institution-list/institution';
import { SolidarityTruckService } from '../solidarity-truck.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent implements OnInit {

  truckBox$: Observable<Institution[]>;
  totalPrice$: Observable<number>;

  constructor(private truck: SolidarityTruckService) {
    this.truckBox$ = truck.truckBox.asObservable();
    this.totalPrice$ = truck.total.asObservable();
  }

  ngOnInit(): void {
  }

}
