import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderPage } from './header.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class HeaderPageRoutingModule {}
