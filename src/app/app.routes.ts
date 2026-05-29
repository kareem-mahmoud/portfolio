import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        title: 'Home',
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        title: 'Home',
        path: 'home', 
        loadComponent: () => import('./pages/home/home').then(m => m.Home) 
    },
    { 
        title: 'All Projects',
        path: 'all-projects', 
        loadComponent: () => import('./pages/all-projects/all-projects').then(m => m.AllProjects) 
    },
    { 
        title: 'Single Project',
        path: 'project/:id', 
        loadComponent: () => import('./pages/single-project/single-project').then(m => m.SingleProject) 
    },
    { 
        title: 'All Skills',
        path: 'all-skills', 
        loadComponent: () => import('./pages/all-skills/all-skills').then(m => m.AllSkills) 
    },
    { 
        title: 'Contact',
        path: 'contact', 
        loadComponent: () => import('./pages/contacts/contacts').then(m => m.Contacts)
    },
    { 
        title: 'Home',
        path: '**', 
        redirectTo: 'home', 
        pathMatch: 'full'
    }
];
