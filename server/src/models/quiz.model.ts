import { Question } from "./question.model";

export interface Quiz {
  quizName: string;
  quizDescription: string;
  quizImage: string;
  creatorId: string;
  isPublic: boolean;
  questions: Question[];
  quizId: number;
}
