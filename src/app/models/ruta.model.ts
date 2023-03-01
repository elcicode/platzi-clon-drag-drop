export interface Ruta {
  id: number;
  path: string;
  title: string;
  cursos: Curso[];
}

export interface Curso {
  icon: string;
  title: string;
  status: 'Completado' | '70% Completado';
}
