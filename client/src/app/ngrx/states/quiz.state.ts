import { Quiz } from "src/models/quiz.model";

export interface QuizState {
  quizzes: Quiz[];
  selectedQuiz: Quiz|null;
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}
