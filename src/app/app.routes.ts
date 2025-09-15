import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'home', component: Home },
    { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
    { path: 'projects', loadComponent: () => import('./shared/projects/projects').then(m => m.Projects) },
    { path: 'skills', loadComponent: () => import('./shared/skills/skills').then(m => m.Skills) },
    { path: '**', redirectTo: 'home' }
];
