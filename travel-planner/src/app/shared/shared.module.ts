import { PersistenceModule } from './persistence/persistence.module';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    PersistenceModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    PersistenceModule
  ]
})
export class SharedModule { }
