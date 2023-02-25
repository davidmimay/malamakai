import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanComponent } from './ocean/ocean.component';
import { ActionComponent } from './action/action.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OceanComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OceanComponent
  ]
})
export class MalamakaiModule { }
