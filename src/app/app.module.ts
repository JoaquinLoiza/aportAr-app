import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionListComponent } from './institution-list/institution-list.component';
import { AportarExploreComponent } from './aportar-explore/aportar-explore.component';
import { AportarHomeComponent } from './aportar-home/aportar-home.component';
import { AportarContactComponent } from './aportar-contact/aportar-contact.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { TruckComponent } from './truck/truck.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionListComponent,
    AportarExploreComponent,
    AportarHomeComponent,
    AportarContactComponent,
    InputIntegerComponent,
    TruckComponent,
    DropdownItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
