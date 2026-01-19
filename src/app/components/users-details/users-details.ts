import {
  Component,
  input,
  viewChild,
  ElementRef,
  effect
} from '@angular/core';

@Component({
  selector: 'app-users-details',
  standalone: true,
  templateUrl: './users-details.html',
  styleUrl: './users-details.css',
})
export class UsersDetails {

  /* 1️⃣ INPUT MODERNO (signal) */
  user = input<{ id: number; nombre: string } | null>(null);

  /* 2️⃣ VIEWCHILD MODERNO */
  titulo = viewChild<ElementRef>('titulo');

  /* 3️⃣ CALLBACK (VIENE DEL PADRE) */
  onSelect = input<
  ((user: { id: number; nombre: string } | null) => void)
>();


  constructor() {
    console.log('constructor');
  }

  /* 4️⃣ EFFECT → reemplaza ngOnInit + ngOnChanges */
  userEffect = effect(() => {
    console.log('Usuario actual:', this.user());

    
  });

  /* 5️⃣ MÉTODO QUE LLAMA AL PADRE */
   seleccionar() {
    // 👈 ahora sí funciona
    this.onSelect()?.(this.user());
  }
}
