import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { quizFeatureKey, quizReducer } from './quiz.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as QUIZ_EFFECTS from './quiz.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(quizFeatureKey, quizReducer),
    EffectsModule.forFeature(QUIZ_EFFECTS)
  ]
})
export class QuizStateModule { }
