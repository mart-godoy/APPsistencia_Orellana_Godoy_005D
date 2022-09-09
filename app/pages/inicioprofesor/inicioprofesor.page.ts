import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-inicioprofesor',
  templateUrl: './inicioprofesor.page.html',
  styleUrls: ['./inicioprofesor.page.scss'],
})
export class InicioprofesorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('custom');
  }


}
