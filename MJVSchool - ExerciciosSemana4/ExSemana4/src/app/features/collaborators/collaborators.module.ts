import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListingComponent } from './components/employees-listing/employees-listing.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EmployeesListingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    EmployeesListingComponent
  ]
})
export class CollaboratorsModule { }
