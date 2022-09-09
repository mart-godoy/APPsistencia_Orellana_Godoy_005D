import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-inicioalumno',
  templateUrl: './inicioalumno.page.html',
  styleUrls: ['./inicioalumno.page.scss'],
})
export class InicioalumnoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('custom');
  }

}
