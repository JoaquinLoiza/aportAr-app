import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {
  
  @Input() message: string
  @Input() links: string[];
  toggle: boolean = false;
  btnMessage: string = "Ver más";

  constructor() { }

  ngOnInit(): void {
  }

  toggleInfo() {
    if (!this.toggle) {
      this.toggle = true;
      this.btnMessage = "Ocultar";
    }
    else {
      this.toggle = false;
      this.btnMessage = "Ver más"
    }
  }
}
