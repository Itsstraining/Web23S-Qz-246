import { createAction, props } from "@ngrx/store";
import { Player } from "src/models/player.model";

export const getPlayers=createAction(
  "[Player] GET_PLAYERS"
  // props<{page:number,perPage:number}>()
);

export const getPlayersSuccess=createAction(
  "[Player] GET_PLAYERS_SUCCESS",
  props<{players:Player[]}>()
);
