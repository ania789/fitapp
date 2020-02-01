import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotationPageRoutingModule } from './quotation-routing.module';

import { QuotationPage } from './quotation.page';
import { HeaderPage } from 'src/app/header/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QuotationPage]
})
export class QuotationPageModule {}
