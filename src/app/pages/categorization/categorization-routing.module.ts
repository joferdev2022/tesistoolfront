import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorizationComponent } from './categorization.component';

const routes: Routes = [
  {
    path: '',
    component: CategorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorizationRoutingModule { }
