import { createReducer, on } from '@ngrx/store';
import { QuestionState } from '../states/question.state';
import * as QuestionActions from '../actions/question.action';

export const initialState: QuestionState = {
  questions: [
    // {
    //   questionType: "Quiz",
    //   point: 2,
    //   answerTime: 30,
    //   backgroundImage: "data:image/jpeg;base64,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",
    //   title: "Câu hỏi 1",
    //   answers: [
    //     { id: "a", body: "aaee", isCorrect: true },
    //     { id: "b", body: "bbds", isCorrect: false },
    //     { id: "c", body: "ccvvv", isCorrect: false },
    //     { id: "d", body: "ddsss", isCorrect: false },
    //   ],
    //   questionId: "1",
    // },
    // {
    //   questionType: "True/False",
    //   point: 1,
    //   answerTime: 20,
    //   backgroundImage: '',
    //   title: "Câu hỏi 2 gjdjdjdjjj",
    //   answers: [
    //     { id: "a", body: "True", isCorrect: true },
    //     { id: "b", body: "False", isCorrect: false },
    //   ],
    //   questionId: "2",
    // },
  ],
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
  on(QuestionActions.getQuestion, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuestionActions.getQuestionSuccess, (state, { question }) => ({
    ...state,
    selectedQuestion: question,
    isLoading: false,
  })),
  on(QuestionActions.getQuestionFailure, (state, { error }) => ({
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
  on(QuestionActions.updateSeleceQuestion, (state, { question }) => ({
    ...state,
    selectedQuestion: question,
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
  on(QuestionActions.updateQuestions, (state, { questions }) => ({
    ...state,
    questions: questions,
  })),

  on(QuestionActions.updateSelectedQuestion, (state, { question }) => ({
    ...state,
    selectedQuestion: question,
  })),

  on(QuestionActions.deleteQuestion, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(QuestionActions.deleteQuestionSuccess, (state, { questionId=0}) => ({
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
