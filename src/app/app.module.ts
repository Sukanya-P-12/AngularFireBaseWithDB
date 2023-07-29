import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideStorage,
  getStorage,
  StorageModule,
} from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBiR84aJ1BgWqsFySsyl1tU9M33MtStZkM',
  authDomain: 'angularfirebasewithdb.firebaseapp.com',
  projectId: 'angularfirebasewithdb',
  storageBucket: 'angularfirebasewithdb.appspot.com',
  messagingSenderId: '391518348371',
  appId: '1:391518348371:web:bc0757d94a312359d692a6',
  measurementId: 'G-6NEKZJ1LKV',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StorageModule,
    //provideFirebaseApp(() => initializeApp(firebaseConfig)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    //provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
