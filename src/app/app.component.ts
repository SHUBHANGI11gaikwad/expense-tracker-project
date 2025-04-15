import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { LoginComponent } from './login/login.component';

// Assuming you have defined your routes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,AppComponent,DashboardComponent,ExpenseListComponent,ExpenseFormComponent,RouterOutlet,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-tracker-project';
}
