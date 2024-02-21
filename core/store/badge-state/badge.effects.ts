import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {BadgeService} from "../../services/badge.service";
import {badgePageActions} from "./actions/badge-page.actions";
import {exhaustMap, of} from "rxjs";
import {Badge} from "../../model/badge";
import {badgeApiActions} from "./actions/badge-api.actions";
import {catchError, map} from "rxjs/operators";

export const loadBadges = createEffect((
  actions$ = inject(Actions),
  badgeService = inject(BadgeService)
) => {
  return actions$.pipe(
    ofType(badgePageActions.enter),
    exhaustMap(() => badgeService.getAllBadges()
      .pipe(
        map((badges: Badge[]) => {
          return badgeApiActions.badgesLoadedSuccess({badges: badges})
        }),
        catchError((errors) => {
          return of(badgeApiActions.badgesLoadedFailure({errors: errors}))
        })
      )
    )
  )
}, {functional: true})
