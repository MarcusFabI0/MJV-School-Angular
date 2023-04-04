import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListingComponent } from './components/employees-listing/employees-listing.component';



@NgModule({
  declarations: [
    EmployeesListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmployeesListingComponent
  ]
})
export class CollaboratorsModule { }
