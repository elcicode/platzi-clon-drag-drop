import { Component, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Dialog } from '@angular/cdk/dialog';
import { CursosComponent } from './components/cursos/cursos.component';
import { faCircleQuestion, faCircleCheck, faAward } from '@fortawesome/free-solid-svg-icons';
import { Ruta, Curso } from './models/ruta.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzi-clon-drag-drop';

  faCircleQuestion = faCircleQuestion;
  faCircleCheck = faCircleCheck;
  faAward = faAward;


  icon = 'https://static.platzi.com/media/achievements/badge-angular-componentes-servicios-75f68ec3-48e0-430e-b7e2-889fad0d1984.png';

  isOpen = false;

  idRuta: any = 0;

  rutas: Ruta[] = [
    {
      id: 1,
      path: 'RUTA',
      title: 'Matemáticas para Programación',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso de Fundamentos de Matemáticas',
          status: '70% Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Álgebra',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Excel para el Análisis de Datos',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Matemáticas Discretas',
          status: '70% Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Fundamentos de Matemáticas',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Álgebra',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Excel para el Análisis de Datos',
          status: '70% Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Matemáticas Discretas',
          status: '70% Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Fundamentos de Matemáticas',
          status: '70% Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Álgebra',
          status: '70% Completado'
        }
      ]
    },
    {
      id: 2,
      path: 'RUTA',
      title: 'Desarrollo con WordPress',
      cursos: [

      ]
    },
    {
      id: 3,
      path: 'RUTA',
      title: 'Habilidades Blandas',
      cursos: [

      ]
    },
    {
      id: 4,
      path: 'RUTA',
      title: 'Blockchain y Criptomonedas',
      cursos: [

      ]
    },
    {
      id: 5,
      path: 'RUTA',
      title: 'Full Stack Developer con JavaScript',
      cursos: [

      ]
    },
    {
      id: 6,
      path: 'RUTA',
      title: 'English Learning',
      cursos: [

      ]
    },
    {
      id: 7,
      path: 'RUTA',
      title: 'Matemáticas para Programación',
      cursos: [

      ]
    },
    {
      id: 8,
      path: 'RUTA',
      title: 'Desarrollo con WordPress',
      cursos: [

      ]
    },
  ];


  cursos: Curso[] = [];
  rutasData: Ruta[] = [];

  constructor(
    private dialog: Dialog
  ) {}



  drop(event: CdkDragDrop<Ruta[]>) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }

  help(){
    this.isOpen = !this.isOpen;
  }

  openRuta(ruta: Ruta, cursos: Curso[]) {
    const dialogRef = this.dialog.open(CursosComponent, {
      data: {
        minWidth: '300px',
        maxWidth: '50%',
        ruta: ruta,
        cursos: cursos
      }
    })
    console.log(ruta)
    dialogRef.closed.subscribe(id => {
      this.idRuta = id;
      const itemRuta = this.rutas.findIndex(item => item.id === this.idRuta.id);
      console.log('itemRuta',itemRuta)
      this.rutas.splice(itemRuta, 1)

    })
  }

  nuevaRuta: Ruta = {
    id: this.rutas.length + 1,
    path: 'RUTA',
    title: 'Nueva Ruta',
    cursos: [
      {
        icon: this.icon,
        title: 'Curso de Fundamentos de Matemáticas',
        status: '70% Completado'
      },
    ]
  }

  newRuta() {
    this.rutas.push(this.nuevaRuta)
    console.log(this.rutas)
  }



}
