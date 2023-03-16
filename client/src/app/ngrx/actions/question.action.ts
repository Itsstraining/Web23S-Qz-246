import { createAction,props } from "@ngrx/store";
import { Question } from "src/models/question.model";

export const getQuestions=createAction(
  "[Question] GET_QUESTIONS"
  // props<{page:number,perPage:number}>()
);

export const getQuestionsSuccess=createAction(
  "[Question] GET_QUESTIONS_SUCCESS",
  props<{questions:Question[]}>()
);

export const getQuestionsFailure=createAction(
  "[Question] GET_QUESTIONS_FAILURE",
  props<{error:string}>()
);

export const addNewQuestion=createAction(
  "[Question] ADD_NEW_QUESTION",
  props<{question:Question}>()
);

export const addNewQuestionSuccess=createAction(
  "[Question] ADD_NEW_QUESTION_SUCCESS",
  props<{question:Question}>()
);

export const addNewQuestionFailure=createAction(
  "[Question] ADD_NEW_QUESTION_FAILURE",
  props<{error:string}>()
);

export const updateSeleceQuestion=createAction(
  "[Question] UPDATE_SELECE_QUESTION",
  props<{question:Question}>()
);

export const updateQuestion=createAction(
  "[Question] UPDATE_QUESTION",
  props<{question:Question}>()
);

export const updateQuestionSuccess=createAction(
  "[Question] UPDATE_QUESTION_SUCCESS",
  props<{question:Question}>()
);

export const updateQuestionFailure=createAction(
  "[Question] UPDATE_QUESTION_FAILURE",
  props<{error:string}>()
);

export const updateQuestions=createAction(
  "[Question] UPDATE_QUESTIONS",
  props<{questions:Question[]}>()
);

export const updateSelectedQuestion=createAction(
  "[Question] UPDATE_SELECTED_QUESTION",
  props<{question:Question}>()
);

export const deleteQuestion=createAction(
  "[Question] DELETE_QUESTION",
  props<{questionId:string}>()
);

export const deleteQuestionSuccess=createAction(
  "[Question] DELETE_QUESTION_SUCCESS",
  props<{questionId:string}>()
);

export const deleteQuestionFailure=createAction(
  "[Question] DELETE_QUESTION_FAILURE",
  props<{error:string}>()
);

export const getQuestion=createAction(
  "[Question] GET_QUESTION",
  props<{questionId:string}>()
);

export const getQuestionSuccess=createAction(
  "[Question] GET_QUESTION_SUCCESS",
  props<{question:Question}>()
);

export const getQuestionFailure=createAction(
  "[Question] GET_QUESTION_FAILURE",
  props<{error:string}>()
);

export const getQuestionsByQuizId=createAction(
  "[Question] GET_QUESTIONS_BY_QUIZ_ID",
  props<{quizId:string}>()
);

export const getQuestionsByQuizIdSuccess=createAction(
  "[Question] GET_QUESTIONS_BY_QUIZ_ID_SUCCESS",
  props<{questions:Question[]}>()
);

export const getQuestionsByQuizIdFailure=createAction(
  "[Question] GET_QUESTIONS_BY_QUIZ_ID_FAILURE",
  props<{error:string}>()
);


