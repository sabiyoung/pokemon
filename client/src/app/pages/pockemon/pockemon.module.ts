import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PockemonRoutingModule } from './pockemon-routing.module';
import { PockemonComponent } from './pockemon.component';


@NgModule({
  declarations: [
    PockemonComponent
  ],
  imports: [
    CommonModule,
    PockemonRoutingModule
  ]
})
export class PockemonModule { }
