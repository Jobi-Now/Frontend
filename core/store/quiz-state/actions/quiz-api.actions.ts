import { createActionGroup, props } from "@ngrx/store";
import { Quiz } from "../../../model/quiz";

export const quizApiActions = createActionGroup({
    source: "Quiz Api",
    events: {
        quizesLoadedSuccess: props<{quizes: Quiz[]}>(),
        quizesLoadedFailure: props<{errors: {}}>(),
    }
})