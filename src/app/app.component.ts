import { Component, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Dialog } from '@angular/cdk/dialog';
import { CursosComponent } from './components/cursos/cursos.component';
import { faCircleQuestion, faCircleCheck, faAward, faHeart, faLink } from '@fortawesome/free-solid-svg-icons';
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

  faHeart = faHeart;
  faLink = faLink;


  icon = 'https://static.platzi.com/media/achievements/badge-angular-componentes-servicios-75f68ec3-48e0-430e-b7e2-889fad0d1984.png';

  isOpen = false;

  idRuta: any = 0;

  rutas: Ruta[] = [
    {
      id: 1,
      path: 'RUTA',
      status: '70% completa',
      title: 'Matemáticas para Programación',
      cursos: [
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
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Matemáticas Discretas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Ecuaciones Diferenciales',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Taller de Aplicación de Modelos Numéricos',
          status: '0% completa'
        }
      ]
    },
    {
      id: 2,
      path: 'RUTA',
      status: '70% completa',
      title: 'Desarrollo con WordPress',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso de Creación de Páginas Web',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creación de Blogs con WordPress',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Práctico de HTML y CSS',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso Básico de JavaScript',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso Básico de PHP: Instalación, Fundamentos y Operadores',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Básico de PHP: Arreglos, Funciones y Estructuras de Control',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Práctico de PHP',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creación de Temas para WordPress',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creación de Tiendas en Línea con WooCommerce',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creación de Temas para WooCommerce',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Fundamentos de Ecommerce',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de PHP con Composer',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Manejo de Datos en PHP',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Programación Orientada a Objetos: POO',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Programación Orientada a Objetos en PHP',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Fundamentos de Bases de Datos',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Entornos de Desarrollo y Deployment en WordPress',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Práctico de WordPress',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Profesional de WordPress',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creación de Plugins para WordPress',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creación de Bloques en Gutenberg para WordPress',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Full Site Editing en WordPress',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de App Mobile utilizando Woocommerce',
          status: '0% completa'
        },
      ]
    },
    {
      id: 3,
      path: 'RUTA',
      status: '70% completa',
      title: 'Habilidades Blandas',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso de Estrategias para Aprender en Línea',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Gestión Efectiva del Tiempo',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso para Crear Hábitos Positivos',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Estrategias para la Productividad y la Organización',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Manejo de Emociones para la Productividad y la Organización',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Técnicas Efectivas de Estudio',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Productividad',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Herramientas para el Crecimiento Personal',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso para Desbloquear tu Creatividad',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Superar el Síndrome del Impostor',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso para Desarrollar la Autoconfianza',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Primeros Auxilios Psicológicos para Líderes',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Audiotaller de Resolución de Problemas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Prevención de Conductas de Alto Riesgo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Entender tus Emociones Básicas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Inteligencia Emocional',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción a la Inteligencia Cultural',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Improvisación para la Vida',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Comunicación Efectiva',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Comunicación Asertiva',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Meditación para Seguir Aprendiendo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Manejo de Ansiedad con Terapify',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Prevención del Burnout',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Audiocurso para Prevenir el Burnout en tu Empresa',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Salud y Bienestar en el Mundo Actual',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Prevención de Riesgos Laborales',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Manejo de la Frustración',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso para Desarrollar Empatía',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Herramientas Prácticas para la Inteligencia Emocional',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Inteligencia Emocional para Líderes',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Desarrollar la Autonomía y la Independencia',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Organizar tu Vida con Bullet Journal',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Cómo Dejar de Procrastinar',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso para Encontrar tu Propósito de Vida',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Cómo Prepararte Profesionalmente para el Futuro',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Optimización del Perfil de Linkedin',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso para Desarrollar Habilidades de Emprendimiento',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiotaller para Cambiar tu Carrera Profesional',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Taller: Consigue el Trabajo de tus Sueños',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Triunfar en Entrevistas de Trabajo',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Optimización del Perfil Profesional',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso de Inglés para Entrevistas de Trabajo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Conseguir Trabajo en Tecnología',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Trabajar como Freelance',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para ser Freelance Profesional',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creatividad Financiera',
          status: '70% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Oratoria para Hablar en Público',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Curso para Tomar Decisiones en el Trabajo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Organización Digital',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Ortografía Básica',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Básico de Escritura Creativa',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Motivación para Equipos de Trabajo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso para Líderes en Formación',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Liderazgo: Teoría de Rasgos',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Liderazgo: Teoría de Comportamientos',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Liderazgo: Teoría de la Contingencia',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Liderazgo Integrador',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Desarrollo de Habilidades Blandas para Equipos de Trabajo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Resolución de Conflictos',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Liderazgo para Equipos de Trabajo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Comunicación Efectiva para Equipos de Trabajo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Taller de Oratoria',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Liderazgo Creativo',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso sobre la Neurociencia del Feedback',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Cómo Dar Feedback',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Cómo Recibir Feedback',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Gestión del Cambio',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Fundamentos de Coaching',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Filosofía para Managers',
          status: '0% completa'
        },
      ]
    },
    {
      id: 4,
      path: 'RUTA',
      status: '0% completa',
      title: 'Blockchain y Criptomonedas',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso de Economía Digital: Bitcoin y Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Historia de Bitcoin y Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Bitcoin y Blockchain',
          status: 'Completado'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Historia de Ethereum y Smart Contracts',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso Introducción a las Startups Blockchain',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Creación de NFT',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Historia de los NFT',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Historia de los Cypherpunks',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Gestión de Criptoactivos',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Cuadrante de Dinero de Bitcoin y Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Seguridad para Usuarios de Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Binance: Exchange de Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Gestión Emocional de Inversión en Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción a Finanzas Descentralizadas (DeFi)',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Minicurso de Introducción a la Investigación de Proyectos DeFi',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Finanzas Descentralizadas con Bitcoin',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Análisis Fundamental para Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción al Análisis Técnico de Mercados Financieros',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Análisis Técnico de Mercados Financieros',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Práctico de Análisis Técnico de Mercados Financieros',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Renta y Declaración de Impuestos en Criptomonedas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Audiocurso de Fundamentos de Web3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Prework para Desarrollo de Aplicaciones Blockchain',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Bitcoin para Developers',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Bitcoin Core y Script',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Ethereum para Developers',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción a Tokens en Ethereum',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción al Desarrollo Blockchain: Smart Contracts',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Casos de uso de Smart Contracts',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción a Solidity',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de OpenZeppenlin',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Implementación de Tokens en Ethereum: ERC-20',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Dapps: Introducción al Desarrollo de Aplicaciones Descentralizadas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Desarrollo Frontend de Aplicaciones Descentralizadas con Web3.Js',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Arquitectura de Aplicaciones Descentralizadas en Ethereum',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción a Celo con Solidity',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de UX para DeFi: Diseñando los Servicios Financieros del Futuro',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción a Seguridad de Smart Contracts',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Básico de Rust: Variables, Ciclos y Funciones',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Backend con Rust: Bases de Datos, Controladores y Templates',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Básico de Herramientas para Desarrollo Blockchain con Rust',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Desarrollo en NEAR Blockchain con Rust',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso Práctico de Solana: Construcción de Programas con Rust',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Eventos de Cryptocositas',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Ethereum Developer Program 1º Edición',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Bitcoin y Lightning Network',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso de Introducción a Solana',
          status: '0% completa'
        }
      ]
    },
    {
      id: 5,
      path: 'RUTA',
      status: '70% completa',
      title: 'Full Stack Developer con JavaScript',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso 1',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 2',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 4',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 5',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 6',
          status: '0% completa'
        }
      ]
    },
    {
      id: 6,
      path: 'RUTA',
      status: '70% completa',
      title: 'English Learning',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso 1',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 2',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 4',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 5',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 6',
          status: '0% completa'
        }
      ]
    },
    {
      id: 7,
      path: 'RUTA',
      status: '70% completa',
      title: 'Node.js: Desarrollo Backend con JavaScript',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso 1',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 2',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 4',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 5',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 6',
          status: '0% completa'
        }
      ]
    },
    {
      id: 8,
      path: 'RUTA',
      status: '70% completa',
      title: 'Desarrollo Web Backend con Ruby on Rails',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso 1',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 2',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 4',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 5',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 6',
          status: '0% completa'
        }
      ]
    },
    {
      id: 9,
      path: 'RUTA',
      status: '70% completa',
      title: 'Frontend a Profundidad con Angular',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso 1',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 2',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 4',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 5',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 6',
          status: '0% completa'
        }
      ]
    },
    {
      id: 10,
      path: 'RUTA',
      status: '70% completa',
      title: 'Levantar Capital',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso 1',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 2',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 4',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 5',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 6',
          status: '0% completa'
        }
      ]
    },
    {
      id: 11,
      path: 'RUTA',
      status: '70% completa',
      title: 'Inbound Marketing',
      cursos: [
        {
          icon: this.icon,
          title: 'Curso 1',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 2',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 3',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 4',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 5',
          status: '0% completa'
        },
        {
          icon: this.icon,
          title: 'Curso 6',
          status: '0% completa'
        }
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
    path: 'RUTA PERSONALIZADA',
    status: '0% completa',
    title: 'Nueva Ruta',
    cursos: [
      {
        icon: this.icon,
        title: 'Curso 1',
        status: '0% completa'
      },
      {
        icon: this.icon,
        title: 'Curso 2',
        status: '0% completa'
      },
      {
        icon: this.icon,
        title: 'Curso 3',
        status: '0% completa'
      },
      {
        icon: this.icon,
        title: 'Curso 4',
        status: '0% completa'
      },
      {
        icon: this.icon,
        title: 'Curso 5',
        status: '0% completa'
      },
      {
        icon: this.icon,
        title: 'Curso 6',
        status: '0% completa'
      }
    ]
  }

  newRuta() {
    this.rutas.unshift(this.nuevaRuta)
    console.log(this.rutas)
  }



}
