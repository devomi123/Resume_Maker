import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { InterceptorService } from './core/interceptor/interceptor.service'
import { provideServerRendering } from '@angular/platform-server';
import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes), provideClientHydration(withEventReplay()),
  provideAnimationsAsync(), importProvidersFrom(BrowserModule, BrowserAnimationsModule,AppRoutingModule),
  providePrimeNG({ theme: { preset: Aura } }),
  provideAnimations(),
  provideHttpClient(withInterceptors([InterceptorService])),
  provideToastr({
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    progressBar: true,  
    // closeButton: false,
    timeOut: 3000
  })
  ]
};
