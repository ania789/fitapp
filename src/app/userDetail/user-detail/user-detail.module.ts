import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailPageRoutingModule } from './user-detail-routing.module';

import { UserDetailPage } from './user-detail.page';
import { HeaderPage } from 'src/app/header/header/header.page';
import { HeaderPageModule } from 'src/app/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderPageModule
  ],
  declarations: [UserDetailPage]
})
export class UserDetailPageModule {}
