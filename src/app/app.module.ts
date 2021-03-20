import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { fromEventPattern } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  // missing something here.
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
