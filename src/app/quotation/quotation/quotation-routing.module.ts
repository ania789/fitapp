import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotationPage } from './quotation.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: QuotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class QuotationPageRoutingModule {}
