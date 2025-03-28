import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./home/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'post',
    loadComponent: () => import('./home/post/post.page').then( m => m.PostPage)
  },
];
