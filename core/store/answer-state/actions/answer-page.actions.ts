import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Option} from "../../../model/option";

const SOURCE = "Answer Page";

export const answerPageActions = createActionGroup({
  source: SOURCE,
  events: {
    enter: emptyProps(),
    selectAnswer: props<{options: Option[]}>()
  }
})
