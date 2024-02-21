import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import {AuthBackgroundComponent} from "../../../shared/auth-background/auth-background.component";
import {NgOptimizedImage} from "@angular/common";
import {NavBarComponent} from "../../../shared/nav-bar/nav-bar.component";
import { Store } from '@ngrx/store';
import {selectSelectedBadge} from "../../../core/store/badge-state/badge.reducer";
import {Badge} from "../../../core/model/badge";
import {quizPageActions} from "../../../core/store/quiz-state/actions/quiz-page.actions";
import {Quiz} from "../../../core/model/quiz";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    TuiMarkerIconModule,
    RouterModule,
    AuthBackgroundComponent,
    NgOptimizedImage,
    NavBarComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  selectedBadge: Signal<Badge | null | undefined> = this.store.selectSignal(selectSelectedBadge);
  constructor(private currentRoute: ActivatedRoute, private store: Store) { }

  startQuiz() {
    this.store.dispatch(quizPageActions.selectQuiz({quiz: this.selectedBadge()?.quiz as Quiz}))
  }

}
