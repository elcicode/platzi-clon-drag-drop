export interface Ruta {
  id: number;
  path: string;
  title: string;
  cursos: Curso[];
}

export interface Curso {
  icon: string;
  title: string;
  status: 'Curso Aprobado' | '70% Completado';
}
