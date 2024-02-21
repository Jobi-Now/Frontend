import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {answerFeatureKey, answerStateReducer} from "./answer.reducer";
import {EffectsModule} from "@ngrx/effects";
import * as AnswerEffects from "./answer.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(answerFeatureKey, answerStateReducer),
    EffectsModule.forFeature(AnswerEffects)
  ]
})
export class AnswerStateModule { }
