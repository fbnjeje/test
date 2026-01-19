import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersDetails } from '../../components/users-details/users-details';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersDetails],
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

  // este es el usuario que se manda al hijo
  usuario = {
    id: 1,
    nombre: 'Carlos'
  };

  // CALLBACK: el hijo llamará esta función
  recibirUsuario = (user: any) => {
    console.log('Padre recibió:', user);
  };
}
