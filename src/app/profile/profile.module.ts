import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { httpInterceptorProviders } from '../core/interceptors';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule
   
  ],
  providers: [httpInterceptorProviders],
})
export class ProfileModule { }
