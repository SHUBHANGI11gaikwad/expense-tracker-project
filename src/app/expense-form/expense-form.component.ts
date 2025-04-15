import { Component } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../expense.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {
  newExpense: Expense = { amount: 0, category: '', description: '' };

  constructor(private expenseService: ExpenseService) { }

  addExpense(): void {
    this.expenseService.addExpense(this.newExpense);
    this.newExpense = { amount: 0, category: '', description: '' }; // Clear form
  }

}
