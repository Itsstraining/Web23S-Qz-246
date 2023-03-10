import { createReducer, on } from '@ngrx/store';
import { QuestionState } from '../states/question.state';
import * as QuestionActions from '../actions/question.action';

export const initialState: QuestionState = {
  questions: [],
  selectedQuestion: null,
  error: "",
  isSuccess: false,
  isLoading: false,
};

export const questionReducer = createReducer(
  initialState,
  on(QuestionActions.getQuestions, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuestionActions.getQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions,
    isLoading: false,
  })),
  on(QuestionActions.getQuestionsFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(QuestionActions.addNewQuestion, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuestionActions.addNewQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: [...state.questions, question],
    isLoading: false,
  })),
  on(QuestionActions.addNewQuestionFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(QuestionActions.updateQuestion, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuestionActions.updateQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: state.questions.map((q) =>
      q.questionId === question.questionId ? question : q
    ),
    isLoading: false,
  })),
  on(QuestionActions.updateQuestionFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(QuestionActions.deleteQuestion, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuestionActions.deleteQuestionSuccess, (state, { questionId }) => ({
    ...state,
    questions: state.questions.filter((q) => q.questionId !== questionId),
    isLoading: false,
  })),
  on(QuestionActions.deleteQuestionFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);

//   props<{error:string}>()
