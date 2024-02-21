import {Answer} from "../../model/answer";
import {createFeature, createReducer} from "@ngrx/store";

interface AnswerStateInterface {
  collection: Answer[],
  selectedAnswer: Answer | undefined,
  loading: boolean,
  errors: {}
}

const initialState: AnswerStateInterface = {
  collection: [],
  selectedAnswer: undefined,
  loading: false,
  errors: {}
}

const ANSWER_FEATURE_KEY: string = "Answer";

const answerFeature = createFeature({
  name: ANSWER_FEATURE_KEY,
  reducer: createReducer(
    initialState
  )
})

export const {
  name: answerFeatureKey,
  reducer: answerStateReducer,
  selectCollection,
  selectLoading,
  selectSelectedAnswer,
  selectErrors
} = answerFeature;
