import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'mfe',
    loadComponent: () =>
      loadRemoteModule('mfe', './Component').then((m) => m.AppComponent),
  },
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '**',
    redirectTo: 'mfe',
    pathMatch: 'full',
  }
];
