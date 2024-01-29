import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'student',
    loadComponent: () => import('./pages/student/student.page').then( m => m.StudentPage)
  },
  {
    path: 'classe',
    loadComponent: () => import('./pages/classe/classe.page').then( m => m.ClassePage)
  },
  {
    path: 'teacher',
    loadComponent: () => import('./pages/teacher/teacher.page').then( m => m.TeacherPage)
  },
  {
    path: 'marksheet',
    loadComponent: () => import('./pages/marksheet/marksheet.page').then( m => m.MarksheetPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];
