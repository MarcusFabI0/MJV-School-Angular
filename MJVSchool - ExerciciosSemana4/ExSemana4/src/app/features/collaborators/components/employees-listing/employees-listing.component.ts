import { Component } from '@angular/core';
import { Collaborators } from './models/employee.model';

@Component({
  selector: 'app-employees-listing',
  templateUrl: './employees-listing.component.html',
  styleUrls: ['./employees-listing.component.scss']
})
export class EmployeesListingComponent {
  titulo = "Gestão de Colaboradores"
  collaborator = {
    img: "assets/images/colaborador.png",
    id: 7,
    name: "Nathan Carlos Exercicio",
    salary: 4500,
    role: "Dev Pl"
  }

  collaborators: Array<Collaborators> = [
    {
      img: "assets/images/colaborador.png",
      id: 7,
      name: "Nathan Carlos Exercicio",
      salary: 6600,
      role: "Dev Sr",
      inProject:true
    },
    {
      img: "assets/images/colaborador.png",
      id: 7,
      name: "Nathan Carlos Exercicio",
      salary: 3500,
      role: "Dev Jr",
      inProject: false
    },
    {
      img: "assets/images/colaborador.png",
      id: 7,
      name: "Nathan Carlos Exercicio",
      salary: 4600,
      role: "Dev Pl",
      inProject:false
    },{
      img: "assets/images/colaborador.png",
      id: 7,
      name: "Nathan Carlos Exercicio",
      salary: 4000,
      role: "Trainee",
      inProject: true
    }
  ]

  showSalary = true;
  showSalaryYesOrNo(){
    this.showSalary = !this.showSalary;
  }
}
