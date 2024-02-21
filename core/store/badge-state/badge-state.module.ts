import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {badgeFeatureKey, badgeReducer} from "./badge.reducer";
import {EffectsModule} from "@ngrx/effects";
import * as badgeEffects from "./badge.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(badgeFeatureKey, badgeReducer),
    EffectsModule.forFeature(badgeEffects)
  ]
})
export class BadgeStateModule { }
