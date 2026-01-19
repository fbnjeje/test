import { 
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Users } from "../../pages/users/users";
import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-users-details',
  imports: [],
  templateUrl: "./users-details.html" ,
  styleUrl: './users-details.css',
})
export class UsersDetails implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  /* INPUT */
  @Input() user: { id: number; nombre: string } | null = null;

  /* VIEW CHILD */
  @ViewChild('titulo') titulo!: ElementRef;

  /* 1️⃣ CONSTRUCTOR */
  constructor() {
    console.log('1️⃣ constructor → se crea el componente');
  }

  /* 2️⃣ ON CHANGES */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges → cambió el usuario', changes);
  }

  /* 3️⃣ ON INIT */
  ngOnInit() {
    console.log('ngOnInit → inicializar lógica');
  }

  /* 4️⃣ AFTER VIEW INIT */
  ngAfterViewInit() {
    console.log('ngAfterViewInit → DOM listo');
    this.titulo.nativeElement.style.color = 'green';
  }

  /* 5️⃣ ON DESTROY */
  ngOnDestroy() {
    console.log('ngOnDestroy → limpieza');
  }
}
