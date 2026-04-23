import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { txns } from '../bank';

export interface Transaction {
  date: string;
  description: string;
  type: number | string;
  amount: number;
  balance: string;
}

@Component({
  selector: 'app-record-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent implements OnInit {
  allTransactions: Transaction[] = [];
  displayedTransactions: Transaction[] = [];
  selectedDate: string = '';

  ngOnInit(): void {
    this.allTransactions = this.getTransactions();
    this.displayedTransactions = [...this.allTransactions];
  }

  getTransactions(): Transaction[] {
    return txns as Transaction[];
  }

  onFilter(): void {
    if (!this.selectedDate) {
      return;
    }
    this.displayedTransactions = this.allTransactions.filter(
      txn => txn.date === this.selectedDate
    );
  }

  onReset(): void {
    this.selectedDate = '';
    this.displayedTransactions = [...this.allTransactions];
  }

  onSortByAmount(): void {
    this.displayedTransactions = [...this.displayedTransactions].sort(
      (a, b) => a.amount - b.amount
    );
  }

  getTypeLabel(type: number | string): string {
    if (type === 0) return 'Credit';
    if (type === 1) return 'Debit';
    return String(type);
  }
}