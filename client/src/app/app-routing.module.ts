import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TocComponent } from './pages/toc/toc.component';

const routes: Routes = [
  {path: 'toc',component: TocComponent},
  {path: 'pokemon', loadChildren: () => import('./pages/pockemon/pockemon.module').then(m => m.PockemonModule)},
  {path: 'berry', loadChildren: () => import('./pages/berry/berry.module').then(m => m.BerryModule)},
  {path: '', component:LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
