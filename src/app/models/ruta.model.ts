export interface Ruta {
  id: number;
  path: string;
  status: '0% completa' | '70% completa' | '100% completa';
  title: string;
  cursos: Curso[];
}

export interface Curso {
  icon: string;
  title: string;
  status: 'Completado' | '70% completa' | '0% completa';
}
