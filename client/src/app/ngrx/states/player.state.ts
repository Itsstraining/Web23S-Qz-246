import { Player } from "src/models/player.model";

export interface PlayerState {
  players: Player[];
  player: Player;
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}
