import {provideAnimations} from "@angular/platform-browser/animations";
import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "./app.module";
import { authInterceptorInterceptor } from "./core/interceptors/auth-interceptor.interceptor";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppModule, HttpClientModule),
    provideAnimations(),
    provideRouter(routes),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
