import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordTableComponent } from './record-table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('RecordTableComponent', () => {
  let component: RecordTableComponent;
  let fixture: ComponentFixture<RecordTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordTableComponent, FormsModule, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all transactions on init', () => {
    expect(component.displayedTransactions.length).toBe(6);
  });

  it('should filter transactions by date', () => {
    component.selectedDate = '2019-11-29';
    component.onFilter();
    expect(component.displayedTransactions.length).toBe(2);
  });

  it('should not filter if no date is selected', () => {
    component.selectedDate = '';
    component.onFilter();
    expect(component.displayedTransactions.length).toBe(6);
  });

  it('should sort transactions by amount ascending', () => {
    component.onSortByAmount();
    const amounts = component.displayedTransactions.map(t => t.amount);
    expect(amounts).toEqual([...amounts].sort((a, b) => a - b));
  });
});
