import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PockemonComponent } from './pockemon.component';


const routes: Routes = [{path: '', component:PockemonComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class PockemonRoutingModule { }
