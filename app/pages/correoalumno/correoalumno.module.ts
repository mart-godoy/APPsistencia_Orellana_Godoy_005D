import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoalumnoPageRoutingModule } from './correoalumno-routing.module';

import { CorreoalumnoPage } from './correoalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreoalumnoPageRoutingModule
  ],
  declarations: [CorreoalumnoPage]
})
export class CorreoalumnoPageModule {}
