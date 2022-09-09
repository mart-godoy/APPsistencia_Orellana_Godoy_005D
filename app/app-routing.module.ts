import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'iniciarcomo',
    loadChildren: () => import('./pages/iniciarcomo/iniciarcomo.module').then( m => m.IniciarcomoPageModule)
  },
  {
    path: 'inicioprofesor',
    loadChildren: () => import('./pages/inicioprofesor/inicioprofesor.module').then( m => m.InicioprofesorPageModule)
  },
  {
    path: 'inicioalumno',
    loadChildren: () => import('./pages/inicioalumno/inicioalumno.module').then( m => m.InicioalumnoPageModule)
  },
  {
    path: 'scanear',
    loadChildren: () => import('./pages/scanear/scanear.module').then( m => m.ScanearPageModule)
  },
  {
    path: 'generar',
    loadChildren: () => import('./pages/generar/generar.module').then( m => m.GenerarPageModule)
  },
  {
    path: 'correoprofesor',
    loadChildren: () => import('./pages/correoprofesor/correoprofesor.module').then( m => m.CorreoprofesorPageModule)
  },
  {
    path: 'correoalumno',
    loadChildren: () => import('./pages/correoalumno/correoalumno.module').then( m => m.CorreoalumnoPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
