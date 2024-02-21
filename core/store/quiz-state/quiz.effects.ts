import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { QuizService } from "../../services/quiz.service";
import { quizPageActions } from "./actions/quiz-page.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { quizApiActions } from "./actions/quiz-api.actions";

export const loadQuizes = createEffect((
    actions$ = inject(Actions),
    quizService = inject(QuizService)
) => {
    return actions$.pipe(
        ofType(quizPageActions.enter),
        exhaustMap(() => {
            return quizService.getAllQuizes().pipe(
                map((quizes) => {
                    return quizApiActions.quizesLoadedSuccess({quizes: quizes});
                }),
                catchError((errors) => {
                    return of(quizApiActions.quizesLoadedFailure({ errors: errors }));
                })
            )
        })
    )
}, { functional: true })