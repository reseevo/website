import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard-home/dashboard-home').then((component) => component.DashboardHome)
  },
  {
    path: 'padel',
    loadComponent: () =>
      import('./pages/sector-placeholder/sector-placeholder').then(
        (component) => component.SectorPlaceholder
      )
  },
  {
    path: 'fitness',
    loadComponent: () =>
      import('./pages/sector-placeholder/sector-placeholder').then(
        (component) => component.SectorPlaceholder
      )
  },
  {
    path: 'beauty',
    loadComponent: () =>
      import('./pages/sector-placeholder/sector-placeholder').then(
        (component) => component.SectorPlaceholder
      )
  },
  {
    path: 'barber',
    loadComponent: () =>
      import('./pages/sector-placeholder/sector-placeholder').then(
        (component) => component.SectorPlaceholder
      )
  },
  {
    path: 'takeaway',
    loadComponent: () =>
      import('./pages/sector-placeholder/sector-placeholder').then(
        (component) => component.SectorPlaceholder
      )
  },
  {
    path: 'ristorazione',
    loadComponent: () =>
      import('./pages/sector-placeholder/sector-placeholder').then(
        (component) => component.SectorPlaceholder
      )
  },
  {
    path: 'sectors',
    loadComponent: () =>
      import('./pages/sector-placeholder/sector-placeholder').then(
        (component) => component.SectorPlaceholder
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
