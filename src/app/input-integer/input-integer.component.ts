import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
  
  @Input()
  quantity: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }
  
  ngOnInit(): void {
  }

  upQuantity(): void{
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  downQuantity(): void{
    if(this.quantity>0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event): void {
    if ( !(event.target.value >= 0)|| event.keyCode == 187 || event.keyCode == 189 || event.keyCode == 190 || event.keyCode == 32) {
      this.quantity = 1;
      this.quantityChange.emit(this.quantity);
    }else
      this.quantityChange.emit(this.quantity);
  }
}
