import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersDetails } from '../../components/users-details/users-details';

@Component({
  selector: 'app-users',
  imports: [CommonModule,UsersDetails],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  mostrar = true;

  usuarioSeleccionado = {
    id: 1,
    nombre: 'Carlos'
  };

  seleccionarUsuario() {
    this.usuarioSeleccionado = {
      id: 2,
      nombre: 'María'
    };
  }
}