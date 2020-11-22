import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const routes: Routes = [
  {
    path: "cities",
    component: CityComponent,
  },
  {
    path : "contacts",
    component : ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
