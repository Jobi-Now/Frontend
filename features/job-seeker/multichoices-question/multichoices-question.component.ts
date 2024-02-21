import {Component, Input} from '@angular/core';
import {Question} from '../../../core/model/question';
import {NgFor} from '@angular/common';
import {Option} from "../../../core/model/option";
import {Store} from "@ngrx/store";
import {answerPageActions} from "../../../core/store/answer-state/actions/answer-page.actions";

@Component({
  selector: 'app-multichoices-question',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './multichoices-question.component.html',
  styleUrl: './multichoices-question.component.css'
})
export class MultichoicesQuestionComponent {
  @Input({required: true}) question!: Question;

  constructor(private store: Store) {
  }

  selectOption(option: Option) {
    this.store.dispatch(answerPageActions.selectAnswer({options: [option]}))
  }
}
