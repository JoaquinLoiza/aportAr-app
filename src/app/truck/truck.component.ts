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

  constructor(private truck: SolidarityTruckService) {
    this.truckBox$ = truck.truckBox.asObservable();
  }

  ngOnInit(): void {
  }

}
