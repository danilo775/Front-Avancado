import { Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';

export const routes: Routes = [
    {
        path: 'primeiro-componente',
        component: PrimeiroComponent
    },
    {
        path: 'segundo-componente',
        loadComponent: () => import('./segundo/segundo.component').then(comp => comp.SegundoComponent)
    }
  
];



