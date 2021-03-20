import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardActionsComponent } from './components/dashboard-actions/dashboard-actions.component';
import { DisplayEducationComponent } from './components/display-education/display-education.component';
import { DisplayExperienceComponent } from './components/display-experience/display-experience.component';
import { httpInterceptorProviders } from '../core/interceptors';


@NgModule({
  declarations: [DashboardComponent, DashboardActionsComponent, DisplayEducationComponent, DisplayExperienceComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],

  providers: [httpInterceptorProviders],
})
export class DashboardModule { }
