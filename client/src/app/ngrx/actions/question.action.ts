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
