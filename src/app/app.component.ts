import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myTableData: Array<{
    id: number;
    name: string;
    address: string;
    city: string;
    ph: string;
  }>;
  objectKeys = Object.keys;

  ngOnInit() {
    this.myTableData = [
      {
        id: 121,
        name: 'Parag1',
        address: '1Pune 411033',
        city: 'Chinchwad',
        ph: '+91-123-456789'
      },
      {
        id: 122,
        name: 'Parag2',
        address: '2Pune 411033',
        city: 'Chinchwad',
        ph: '+91-123-456789'
      },
      {
        id: 123,
        name: 'Parag3',
        address: '3Pune 411033',
        city: 'Chinchwad',
        ph: '+91-123-456789'
      },
      {
        id: 124,
        name: 'Parag4',
        address: '4Pune 411033',
        city: 'Chinchwad',
        ph: '+91-123-456789'
      }
    ];
  }
}
