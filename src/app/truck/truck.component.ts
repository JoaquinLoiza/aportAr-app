import { Component, OnInit } from '@angular/core';
import { SolidarityTruckService } from '../solidarity-truck.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent implements OnInit {

  constructor(private truck: SolidarityTruckService) { }

  ngOnInit(): void {
  }

}
