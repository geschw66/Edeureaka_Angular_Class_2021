import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';

const routes: Routes = [

  // auth module should be loaded dynamically.
  // to handle the routingings for modules.
  { path: '', component: LandingComponent},
  {
     path: 'auth',
     loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
     path: 'dashboard',
     loadChildren : () => import('./dashboard/dashboard.module').then( m => m.DashboardModule),
  },

  {
    path: 'profile',
    loadChildren : () => import('./profile/profile.module').then(m => m.ProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
