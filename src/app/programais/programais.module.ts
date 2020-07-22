import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaisPageRoutingModule } from './programais-routing.module';

import { ProgramaisPage } from './programais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaisPageRoutingModule
  ],
  declarations: [ProgramaisPage]
})
export class ProgramaisPageModule {}
