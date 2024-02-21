import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Quiz } from "../../../model/quiz";

export const quizPageActions = createActionGroup({
    source: "Quiz Page",
    events: {
        enter: emptyProps(),
        selectQuiz: props<{quiz: Quiz}>()
    }
})