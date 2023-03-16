import { createReducer, on } from '@ngrx/store';
import { QuizState } from '../states/quiz.state';
import * as QuizActions from '../actions/quiz.action';

export const initialState: QuizState = {
  quizzes: [],
  selectedQuiz: null,
  error: "",
  isSuccess: false,
  isLoading: false,
};

export const quizReducer = createReducer(
  initialState,
  on(QuizActions.getQuizzes, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuizActions.getQuizzesSuccess, (state, action) => ({
    ...state,
    quizzes :action.quizzes,
    isLoading: false,
  })),
  on(QuizActions.getQuizzesFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  })),
  on(QuizActions.getQuiz, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuizActions.getQuizSuccess, (state, { quiz }) => ({
    ...state,
    selectedQuiz: quiz,
    isLoading: false,
  })),
  on(QuizActions.getQuizFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(QuizActions.addNewQuiz, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuizActions.addNewQuizSuccess, (state, { quiz }) => ({
    ...state,
    quizzes: [...state.quizzes, quiz],
    isLoading: false,
  })),
  on(QuizActions.addNewQuizFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(QuizActions.updateQuiz, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuizActions.updateQuizSuccess, (state, { quiz }) => ({
    ...state,
    quizzes: state.quizzes.map((q) => (q.quizId === quiz.quizId ? quiz : q)),
    isLoading: false,
  })),
  on(QuizActions.updateQuizFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(QuizActions.deleteQuiz, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuizActions.deleteQuizSuccess, (state, { quizId }) => ({
    ...state,
    quizzes: state.quizzes.filter((q) => q.quizId !== quizId),
    isLoading: false,
  })),
  on(QuizActions.deleteQuizFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
