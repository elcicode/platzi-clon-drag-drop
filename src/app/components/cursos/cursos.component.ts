import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Curso, Ruta } from 'src/app/models/ruta.model';
import { faAward, faCircleCheck, faGraduationCap, faL } from '@fortawesome/free-solid-svg-icons';



interface InputData {
  ruta: Ruta;
  cursos: Curso[];
}

interface OutputData {
  id: number | null;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  faCircleCheck = faCircleCheck;
  faAward = faAward;
  faGraduationCap = faGraduationCap;

  cursos: Curso[];
  ruta: Ruta;


  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.ruta = data.ruta;
    this.cursos = data.cursos;
  }

  close() {
    this.dialogRef.close({
      id: null,
    });
  }


  idRuta(id: number) {
    this.dialogRef.close({ id })
  }

  hidden = false;
  completados: Curso[] = [];

  hiddenCursos() {
    this.hidden = !this.hidden;
    if (this.hidden === true) {
      this.completados = this.cursos.filter(item => item.status === '70% Completado');
    } else {
      this.completados = [];
    }
    console.log(this.completados)
  }

}
