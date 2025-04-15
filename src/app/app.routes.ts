// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'add-expense', component: ExpenseFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export class AppRoutingModule { }
