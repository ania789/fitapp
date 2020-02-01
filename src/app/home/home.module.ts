import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderPageModule } from 'src/app/header/header/header.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule { }
