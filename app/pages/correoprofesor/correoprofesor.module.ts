import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoprofesorPageRoutingModule } from './correoprofesor-routing.module';

import { CorreoprofesorPage } from './correoprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreoprofesorPageRoutingModule
  ],
  declarations: [CorreoprofesorPage]
})
export class CorreoprofesorPageModule {}
