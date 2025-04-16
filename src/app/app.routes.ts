import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // {
  //   path: 'mfe',
  //   loadComponent: () =>
  //     loadRemoteModule('mfe', './Component').then((m) => m.AppComponent),
  // },
  {
    path: '',
    component: AppComponent,
  },

  // {
  //   path: 'mfe',
  //   loadChildren: () => import('./ShareModule')
  //     .then(m => m.ShareModule)
  //    // .then(m => m.TunnelModule.Routes) // If using nested routes
  // },
  {
    path: 'mfe',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4200/remoteEntry.json',
      exposedModule: './ShareModule'
    }).then(m => m.ShareModule)},
];
