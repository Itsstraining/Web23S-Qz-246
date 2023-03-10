import { Player } from "./player.model";

export interface Room {
  id: string;
  pin: string;
  createId: string;
  players: Player[];
  quizId: string;
}

export interface Room {
  id: number;
  pin: string;
  createId: string;
  players: Player[];
  quizId: string;
}