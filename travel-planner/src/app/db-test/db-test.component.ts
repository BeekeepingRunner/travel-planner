import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

interface Item {
  id: number,
  name: string
}

@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html',
  styleUrls: ['./db-test.component.scss']
})
export class DbTestComponent implements OnInit {

  public items$: Observable<any> = new Observable();

  constructor(
    private dialog: MatDialog,
    private firestore: Firestore
  ) { }

  ngOnInit(): void {
    const items = collection(this.firestore, 'items');
    this.items$ = collectionData(items);
    console.log(this.items$);
  }

}
