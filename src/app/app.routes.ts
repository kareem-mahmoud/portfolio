import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
    { path: 'first-Content', loadComponent: () => import('./home/first-content/first-content').then(m => m.FirstContent) },
    { path: 'projects', loadComponent: () => import('./home/projects/projects').then(m => m.Projects) },
    { path: 'project-card', loadComponent: () => import('./shared/project-card/project-card').then(m => m.ProjectCard) },
    { path: 'skills', loadComponent: () => import('./shared/skills/skills').then(m => m.Skills) },
    { path: 'contacts', loadComponent: () => import('./contacts/contacts').then(m => m.Contacts) },
    { path: '**', redirectTo: 'home' }
];
