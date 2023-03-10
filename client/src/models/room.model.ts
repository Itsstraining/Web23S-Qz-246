import { Player } from "./player.model";
import { Question } from "./question.model";

export interface Room {
  id: number;
  pin: string;
  createId: string;
  players: Player[];
  quizId: string;
}