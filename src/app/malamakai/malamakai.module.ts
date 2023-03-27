import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanComponent } from './ocean/ocean.component';
import { ActionComponent } from './action/action.component';
import { SharedModule } from '../shared/shared.module';
import { HelpersComponent } from './helpers/helpers.component';

@NgModule({
  declarations: [
    OceanComponent,
    ActionComponent,
    HelpersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OceanComponent,
    ActionComponent
  ]
})
export class MalamakaiModule { }
