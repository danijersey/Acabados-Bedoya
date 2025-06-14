import { Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';

export const routes: Routes = [
  { 
    path: '', 
    component: ComponentsComponent,
    children: [
      { path: '', loadComponent: () => import('./components/body/home/home.component').then(m => m.HomeComponent) },
      { path: 'about-us', loadComponent: () => import('./components/body/about-us/about-us.component').then(m => m.AboutUsComponent) },
      { path: 'lo-que-hacemos', loadComponent: () => import('./components/body/what-we-do/what-we-do.component').then(m => m.WhatWeDoComponent) },
      { path: 'servicios', loadComponent: () => import('./components/body/view-services/view-services.component').then(m => m.ViewServicesComponent) },
      { path: 'contactenos', loadComponent: () => import('./components/body/contact/contact.component').then(m => m.ContactComponent) },
    ]
  }
];