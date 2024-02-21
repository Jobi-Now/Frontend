import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Badge} from "../../../model/badge";

export const badgePageActions = createActionGroup({
  source: "Badge Page",
  events: {
    enter: emptyProps,
    selectBadge: props<{badge: Badge}>()
  }
})
