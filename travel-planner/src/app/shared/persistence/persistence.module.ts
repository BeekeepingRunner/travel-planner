import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreDataProvider, NoSqlRealtimeDataProvider } from './database-provider.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: NoSqlRealtimeDataProvider, useClass: FirestoreDataProvider }
  ]
})
export class PersistenceModule { }
