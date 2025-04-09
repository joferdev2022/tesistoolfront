import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { CategorizationModule } from './categorization/categorization.module';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
      },
      {
        path: 'inicio',
        // component: 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'categorizacion',
        // component: 
        loadChildren: () => import('./categorization/categorization.module').then(m => m.CategorizationModule)
      },
      {
        path: 'resultados',
        // component: 
        loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)
      },

      // {
      //   path: 'productos',
      //   // component: 
      //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      // },
      // {
      //   path: 'ventas',
      //   // component: 
      //   loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
      // },
      // {
      //   path: 'creditos',
      //   // component: 
      //   loadChildren: () => import('./credits/credits.module').then(m => m.CreditsModule)
      // },
      // {
      //   path: 'gastos',
      //   // component: 
      //   loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule)
      // },
      
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
