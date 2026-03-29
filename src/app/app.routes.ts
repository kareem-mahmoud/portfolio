import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'all-projects', loadComponent: () => import('./pages/all-projects/all-projects').then(m => m.AllProjects) },
    { path: 'project/:id', loadComponent: () => import('./pages/single-project/single-project').then(m => m.SingleProject) },
    { path: 'contact', loadComponent: () => import('./pages/contacts/contacts').then(m => m.Contacts) },
    { path: '**', redirectTo: 'home' }
];
