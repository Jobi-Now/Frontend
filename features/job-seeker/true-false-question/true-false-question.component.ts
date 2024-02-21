import { Component, Input } from '@angular/core';
import { Question } from '../../../core/model/question';
import {Store} from "@ngrx/store";
import {Option} from "../../../core/model/option";
import {answerPageActions} from "../../../core/store/answer-state/actions/answer-page.actions";

@Component({
  selector: 'app-true-false-question',
  standalone: true,
  imports: [],
  templateUrl: './true-false-question.component.html',
  styleUrl: './true-false-question.component.css'
})
export class TrueFalseQuestionComponent {
  @Input({required: true }) question!: Question;

  constructor(private store: Store) {
  }

  selectOption(option: Option) {
    this.store.dispatch(answerPageActions.selectAnswer({options: [option]}))
  }
}
