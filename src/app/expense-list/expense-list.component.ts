import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../expense.service';
import { CommonModule, NgFor } from '@angular/common';



@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpenses();
  }
  

}
