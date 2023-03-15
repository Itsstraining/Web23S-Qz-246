import { Answer } from "./answer.model";

export interface Question {
  questionType: string;
  point: number;
  answerTime: number;
  backgroundImage: string;
  title: string;
  answers: Answer[];
  questionId: string;
}
