//segundo

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TablaLibros } from './tabla-libros/tabla-libros';
import { DetalleLibro } from './detalle-libro/detalle-libro';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'libros', component: TablaLibros },
  { path: 'libro/:id', component: DetalleLibro },
];
