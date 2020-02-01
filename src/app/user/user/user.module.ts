import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { HeaderPage } from 'src/app/header/header/header.page';
import { HeaderPageModule } from 'src/app/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    ReactiveFormsModule,
    HeaderPageModule
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
