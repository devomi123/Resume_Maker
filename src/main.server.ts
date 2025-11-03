import { BootstrapContext, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';

const bootstrap = (context:BootstrapContext) =>
bootstrapApplication(AppComponent, config , context).catch((err) => console.error(err));

export default bootstrap;
