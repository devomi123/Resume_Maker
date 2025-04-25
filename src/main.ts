import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppRoutingModule } from './app/app-routing.module';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule)]
}).catch((err) => console.error(err));




