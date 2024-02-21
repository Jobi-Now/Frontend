import {createFeature, createReducer, on} from "@ngrx/store";
import {Badge} from "../../model/badge";
import {badgePageActions} from "./actions/badge-page.actions";
import {badgeApiActions} from "./actions/badge-api.actions";

interface BadgeStateInterface {
  collection: Badge[],
  selectedBadge: Badge | null | undefined,
  loading: boolean,
  errors: {}
}

const initialState: BadgeStateInterface = {
  collection: [],
  selectedBadge: undefined,
  loading: false,
  errors: {}
}

const BADGE_FEATURE_KEY: string = "badge";

const badgeFeature = createFeature({
  name: BADGE_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(badgePageActions.enter, state => ({
      ...state,
      loading: true
    })),
    on(badgePageActions.selectBadge, (state, action) => ({
      ...state,
      loading: false,
      selectedBadge: action.badge
    })),
    on(badgeApiActions.badgesLoadedSuccess, (state, action) => ({
      ...state,
      collection: action.badges,
      loading: false
    })),
    on(badgeApiActions.badgesLoadedFailure, (state, action) => ({
      ...state,
      errors: action.errors,
      loading: false
    }))
  )
})

export const {
  name: badgeFeatureKey,
  reducer: badgeReducer,
  selectCollection,
  selectSelectedBadge,
  selectLoading,
  selectErrors
} = badgeFeature;
