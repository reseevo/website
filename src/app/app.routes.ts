import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./FrameworkFrontend/pages/dashboard-home/dashboard-home').then((component) => component.DashboardHome)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
