import {createActionGroup, props} from "@ngrx/store";
import {Badge} from "../../../model/badge";

export const badgeApiActions = createActionGroup({
  source: "Badge API",
  events: {
    badgesLoadedSuccess: props<{badges: Badge[]}>(),
    badgesLoadedFailure: props<{errors: {}}>()
  }
})
