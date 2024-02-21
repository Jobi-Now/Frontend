import { createFeature, createReducer, on } from "@ngrx/store";
import { Quiz } from "../../model/quiz";
import { quizPageActions } from "./actions/quiz-page.actions";
import { quizApiActions } from "./actions/quiz-api.actions";

interface QuizStateInterface {
    collection: Quiz[],
    selectedQuiz: Quiz | undefined,
    loading: boolean,
    errors: {}
}

const initialState: QuizStateInterface = {
    collection: [],
    selectedQuiz: undefined,
    loading: false,
    errors: {}
}

const quizFeature = createFeature({
    name: "quiz",
    reducer: createReducer(
        initialState,
        on(quizPageActions.enter, state => ({
            ...state,
            loading: true
        })),
        on(quizPageActions.selectQuiz, (state, action) => ({
            ...state,
            loading: false,
            selectedQuiz: action.quiz
        })),
        on(quizApiActions.quizesLoadedSuccess, (state, action) => ({
            ...state,
            collection: action.quizes,
            loading: false
        })),
        on(quizApiActions.quizesLoadedFailure, (state, action) => ({
            ...state,
            collection: [],
            loading: false,
            errors: action.errors
        }))
    )
})

export const {
    name: quizFeatureKey,
    reducer: quizReducer,
    selectCollection,
    selectSelectedQuiz,
    selectLoading,
    selectErrors
} = quizFeature;
