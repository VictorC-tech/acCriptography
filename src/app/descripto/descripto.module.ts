import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptoPageRoutingModule } from './descripto-routing.module';

import { DescriptoPage } from './descripto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptoPageRoutingModule
  ],
  declarations: [DescriptoPage]
})
export class DescriptoPageModule {}
