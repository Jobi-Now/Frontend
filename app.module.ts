import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Range } from "./utils/range";
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { CloudinaryModule } from '@cloudinary/ng';
import { TUI_SANITIZER } from "@taiga-ui/core";
import { ALL_TAIGA_UI_MODULES } from "./config/all-taiga-modules";
import { GoogleMapsModule } from "@angular/google-maps";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptorInterceptor } from './core/interceptors/auth-interceptor.interceptor';
import { QuizStateModule } from './core/store/quiz-state/quiz-state.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {BadgeStateModule} from "./core/store/badge-state/badge-state.module";
import {AnswerStateModule} from "./core/store/answer-state/answer-state.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CloudinaryModule,
    GoogleMapsModule,
    ...ALL_TAIGA_UI_MODULES,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), autoPause: true, trace: false, traceLimit: 75 }),
    QuizStateModule,
    BadgeStateModule,
    AnswerStateModule
  ],
  providers: [
    Range,
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptorInterceptor, multi: true }
  ],
})
export class AppModule {
}
