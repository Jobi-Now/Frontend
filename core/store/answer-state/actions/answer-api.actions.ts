import {createActionGroup, props} from "@ngrx/store";
import {Answer} from "../../../model/answer";

const SOURCE = "Answer Api"

export const answerApiActions = createActionGroup({
  source: SOURCE,
  events: {
    answerSentSuccess: props<{answer: Answer}>(),
    answerSentFail: props<{errors: {}}>()
  }
})
