// src/app/services/expense.service.ts
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [
    { amount: 100, category: 'Food', description: 'Lunch' },
    { amount: 50, category: 'Transportation', description: 'Bus fare' },
    { amount: 30, category: 'Vehival expenses', description: 'Bus fare' },
    // ... add more sample expenses as needed
  ];

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }
}

