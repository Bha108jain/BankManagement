import { Component } from '@angular/core';
import { RecordTableComponent } from './record-table/record-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecordTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking-app';
}
