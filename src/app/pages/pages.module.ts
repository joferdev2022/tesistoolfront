import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { CategorizationComponent } from './categorization/categorization.component';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    PagesComponent,
  

      
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule,
    ComponentsModule,
    RouterModule,
  ]
})
export class PagesModule { }
