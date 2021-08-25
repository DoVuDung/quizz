import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerPageRoutingModule } from './lecturer-page-routing.module';
import { LecturerPageComponent } from './lecturer-page.component';

@NgModule({
  declarations: [LecturerPageComponent],
  imports: [
    CommonModule,
    LecturerPageRoutingModule,
  ]
})
export class LecturerPageModule { }
