import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[  
    
    {
      icon:'mail-unread-outline',
      name: 'Mensajes', 
      redirecTo: '/mensajes'
    },
    {
      icon: 'cog',
      name:  'Configuracion',
      redirecTo: '' 
    },
    {
      icon:'log-out',
      name: 'Cerrar sesion', 
      redirecTo: '/inicio'
    },
  ];




}

