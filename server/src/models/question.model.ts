import { Answer } from "./answer.model";

export interface Question {
  questionId: string;
  questionType: string;
  point: number;
  answerTime: number;
  backgroundImage: string;
  title: string;
  answers: Answer[];
}
