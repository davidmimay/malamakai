import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageComponent } from './page/page.component';
import { StoreModule } from '../store/store.module';
import { HeaderComponent } from './header/header.component';
import { MalamakaiModule } from '../malamakai/malamakai.module';

@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule,
    MalamakaiModule
  ]
})
export class HomeModule { }
