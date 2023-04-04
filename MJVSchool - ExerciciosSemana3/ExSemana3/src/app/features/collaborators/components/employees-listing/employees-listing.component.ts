import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-listing',
  templateUrl: './employees-listing.component.html',
  styleUrls: ['./employees-listing.component.scss']
})
export class EmployeesListingComponent {
  titulo = "Gestão de Colaboradores"
  colaborador = {
    img: "assets/images/colaborador.png",
    id: 7,
    nome: "Nathan Carlos Exercicio",
    salario: 4500,
    cargo: "Dev Pl"
  }
}
