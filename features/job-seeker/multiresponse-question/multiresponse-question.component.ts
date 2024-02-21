import { Component, Input } from '@angular/core';
import { Question } from '../../../core/model/question';
import { NgFor } from '@angular/common';
import {Store} from "@ngrx/store";
import {Option} from "../../../core/model/option";
import {answerPageActions} from "../../../core/store/answer-state/actions/answer-page.actions";

@Component({
  selector: 'app-multiresponse-question',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './multiresponse-question.component.html',
  styleUrl: './multiresponse-question.component.css'
})
export class MultiresponseQuestionComponent {
  @Input({required: true }) question!: Question;
  options: Option[] = [];

  constructor(private store: Store) {
  }

  selectOption(option: Option) {
    this.options = [...this.options, option];
    this.store.dispatch(answerPageActions.selectAnswer({options: this.options}));
  }
}
