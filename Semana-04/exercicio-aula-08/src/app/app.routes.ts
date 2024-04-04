import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Comp01Component } from './comp01/comp01.component';
import { Comp02Component } from './comp02/comp02.component';
import { Comp03Component } from './comp03/comp03.component';

export const routes: Routes = [
    {       
        path: '', component: Comp01Component,
    },
    {
        path: 'segundo',
        loadComponent: () => import('./comp02/comp02.component').then(comp => comp.Comp02Component)
    },
    {
        path: 'terceiro',
        loadComponent: () => import('./comp03/comp03.component').then(comp => comp.Comp03Component)
    }
];
