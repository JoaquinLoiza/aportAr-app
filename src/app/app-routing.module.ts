import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AportarContactComponent } from './aportar-contact/aportar-contact.component';
import { AportarExploreComponent } from './aportar-explore/aportar-explore.component';
import { AportarHomeComponent } from './aportar-home/aportar-home.component';

const routes: Routes = [
  { path: '', component: AportarHomeComponent},
  { path: 'explore', component: AportarExploreComponent},
  { path: 'contact', component: AportarContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
