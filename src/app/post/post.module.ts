import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { httpInterceptorProviders } from '../core/interceptors';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [httpInterceptorProviders],
})
export class PostModule { }
