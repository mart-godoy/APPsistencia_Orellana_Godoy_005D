import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'msjalumno',
    loadChildren: () => import('./msjalumno/msjalumno.module').then( m => m.MsjalumnoPageModule)
  },
  {
    path: 'msjprofesor',
    loadChildren: () => import('./msjprofesor/msjprofesor.module').then( m => m.MsjprofesorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
