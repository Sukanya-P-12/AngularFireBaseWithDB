import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularFireBaseWithDB';
  userLogCollection: any;
  userLogObservable: any;
  allItems: any;
  constructor(private db: AngularFirestore) {
    this.userLogCollection = this.db.collection('UserIPAddress');
    this.userLogObservable = this.userLogCollection.valueChanges();
  }

  ngOnInit() {
    this.userLogObservable.subscribe((s: any) => {
      this.allItems = s;
      console.log(this.allItems);
    });
  }
}
