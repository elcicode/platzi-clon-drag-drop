import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Curso, Ruta } from 'src/app/models/ruta.model';
import { faAward, faCircleCheck, faGraduationCap, faEyeSlash, faEye, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



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

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCircleMinus = faCircleMinus;

  cursos: Curso[];
  ruta: Ruta;

  isOpen = false;
  eyeShow = true;
  eyeSlash = 'Mostrar todo';
  eye = 'Ocultar completados';


  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.ruta = data.ruta;
    this.cursos = data.cursos;
  }

  drop(event: CdkDragDrop<Curso[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
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
      this.completados = this.cursos.filter(item => item.status === '0% completa');
    } else {
      this.completados = [];
    }
    console.log(this.completados)
  }

  show() {
    this.isOpen = !this.isOpen
  }

  eyes() {
    this.eyeShow = !this.eyeShow;
  }

}
