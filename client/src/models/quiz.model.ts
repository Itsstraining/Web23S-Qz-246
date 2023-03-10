import { Data } from "@angular/router";
import { Question } from "./question.model";

export interface Quiz {
  quizId: string;
  quizName: string;
  quizDescription: string;
  quizImage: string;
  creatorId: string;
  isPublic: boolean;
  questions: Question[];
}
