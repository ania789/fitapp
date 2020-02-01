import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home2Page } from './home2.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Home2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
})
export class Home2PageRoutingModule {}
