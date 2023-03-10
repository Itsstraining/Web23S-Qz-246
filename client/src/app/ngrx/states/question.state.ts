import { Question } from "src/models/question.model";

export interface QuestionState {
  questions: Question[];
  selectedQuestion: Question|null;
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}

