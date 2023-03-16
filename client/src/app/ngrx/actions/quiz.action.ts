import { createAction, props } from "@ngrx/store";
import { Quiz } from "src/models/quiz.model";

export const getQuizzes=createAction(
  "[Quiz] GET_QUIZZES"
  // props<{page:number,perPage:number}>()
);

export const getQuizzesSuccess=createAction(
  "[Quiz] GET_QUIZZES_SUCCESS",
  props<{quizzes:Quiz[]}>()
);

export const getQuizzesFailure=createAction(
  "[Quiz] GET_QUIZZES_FAILURE",
  props<{error:string}>()
);

export const getQuizzesByCreateId=createAction(
  "[Quiz] GET_QUIZZES_BY_CREATE_ID",
  props<{createId:string}>()
);

export const getQuizzesByCreateIdSuccess=createAction(
  "[Quiz] GET_QUIZZES_BY_CREATE_ID_SUCCESS",
  props<{quizzes:Quiz[]}>()
);

export const getQuizzesByCreateIdFailure=createAction(
  "[Quiz] GET_QUIZZES_BY_CREATE_ID_FAILURE",
  props<{error:string}>()
);

export const addNewQuiz=createAction(
  "[Quiz] ADD_NEW_QUIZ",
  props<{quiz:Quiz}>()
);

export const addNewQuizSuccess=createAction(
  "[Quiz] ADD_NEW_QUIZ_SUCCESS",
  props<{quiz:Quiz}>()
);

export const addNewQuizFailure=createAction(
  "[Quiz] ADD_NEW_QUIZ_FAILURE",
  props<{error:string}>()
);

export const updateQuiz=createAction(
  "[Quiz] UPDATE_QUIZ",
  props<{quiz:Quiz}>()
);

export const updateQuizSuccess=createAction(
  "[Quiz] UPDATE_QUIZ_SUCCESS",
  props<{quiz:Quiz}>()
);

export const updateQuizFailure=createAction(
  "[Quiz] UPDATE_QUIZ_FAILURE",
  props<{error:string}>()
);

export const deleteQuiz=createAction(
  "[Quiz] DELETE_QUIZ",
  props<{quizId:string}>()
);

export const deleteQuizSuccess=createAction(
  "[Quiz] DELETE_QUIZ_SUCCESS",
  props<{quizId:string}>()
);

export const deleteQuizFailure=createAction(
  "[Quiz] DELETE_QUIZ_FAILURE",
  props<{error:string}>()
);

export const getQuiz=createAction(
  "[Quiz] GET_QUIZ",
  props<{quizId:string}>()
);

export const getQuizSuccess=createAction(
  "[Quiz] GET_QUIZ_SUCCESS",
  props<{quiz:Quiz}>()
);

export const getQuizFailure=createAction(
  "[Quiz] GET_QUIZ_FAILURE",
  props<{error:string}>()
);

export const getQuizQuestions=createAction(
  "[Quiz] GET_QUIZ_QUESTIONS",
  props<{quizId:string}>()
);

export const getQuizQuestionsSuccess=createAction(
  "[Quiz] GET_QUIZ_QUESTIONS_SUCCESS",
  props<{questions:any[]}>()
);

export const getQuizQuestionsFailure=createAction(
  "[Quiz] GET_QUIZ_QUESTIONS_FAILURE",
  props<{error:string}>()
);


