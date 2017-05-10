
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './category/SubCategory/sub-category.component';
import { CategoryService } from './category/category.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [DashboardService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
