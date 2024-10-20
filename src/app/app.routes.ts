import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.page').then((m) => m.ResetPasswordPage),
  },
  {
    path: 'user-selection',
    loadComponent: () => import('./user-selection/user-selection.page').then((m) => m.UserSelectionPage),
  },
  {
    path: 'qr-scanner',
    loadComponent: () => import('./qr-scanner/qr-scanner.page').then((m) => m.QrScannerPage),
  },
  {
    path: 'teacher-login',
    loadComponent: () => import('./teacher-login/teacher-login.page').then(m => m.TeacherLoginPage)
  },
  {
    path: 'teacher-dashboard',
    loadComponent: () => import('./teacher-dashboard/teacher-dashboard.page').then(m => m.TeacherDashboardPage)
  },
  {
    path: 'qr-generator',
    loadComponent: () => import('./qr-generator/qr-generator.page').then(m => m.QrGeneratorPage)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.page').then(m => m.NotFoundPage)
  },
  {
    path: 'database-view',
    loadComponent: () => import('./database-view/database-view.page').then( m => m.DatabaseViewPage)
  },
  {
    path: '',
    redirectTo: 'user-selection',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
 
];