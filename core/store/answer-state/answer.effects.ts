import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AnswerService} from "../../services/answer.service";
import {answerPageActions} from "./actions/answer-page.actions";
import {concatMap, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Answer} from "../../model/answer";
import {answerApiActions} from "./actions/answer-api.actions";

export const selectAnswer = createEffect((
  actions$ = inject(Actions),
  answerService = inject(AnswerService)
) => {
  return actions$.pipe(
    ofType(answerPageActions.selectAnswer),
    concatMap((action) => answerService.setAnswer(action.options)
      .pipe(
        map((answer: Answer) => {
          return answerApiActions.answerSentSuccess({answer: answer})
        }),
        catchError((errors) => {
          return of(answerApiActions.answerSentFail({errors: errors}))
        })
      )
    )
  )
}, {functional: true})
