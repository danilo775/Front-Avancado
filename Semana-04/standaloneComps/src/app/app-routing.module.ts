import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';

const routes: Routes = [
  { 
    path: 'primeiro-componente', 
    component: PrimeiroComponent 
  },
  { path: 'segundo-componente', 
    loadComponent: 
      () => import('./segundo/segundo.component')
      .then(comp => comp.SegundoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
