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

export const getPlayersFailure=createAction(
  "[Player] GET_PLAYERS_FAILURE",
  props<{error:string}>()
);

export const getPlayer=createAction(
  "[Player] GET_PLAYER",
  props<{id:string}>()
);

export const getPlayerSuccess=createAction(
  "[Player] GET_PLAYER_SUCCESS",
  props<{player:Player}>()
);

export const getPlayerFailure=createAction(
  "[Player] GET_PLAYER_FAILURE",
  props<{error:string}>()
);

export const addNewPlayer=createAction(
  "[Player] CREATE_PLAYER",
  props<{player:Player}>()
);

// export const addNewPlayerSuccess=createAction(
//   "[Player] CREATE_PLAYER_SUCCESS",
//   props<{player:Player}>()
// );

// export const addNewPlayerFailure=createAction(
//   "[Player] CREATE_PLAYER_FAILURE",
//   props<{error:string}>()
// );

export const sortPlayers=createAction(
  "[Player] SORT_PLAYERS",
  props<{players:Player[]}>()
);

export const updatePlayers=createAction(
  "[Player] UPDATE_PLAYERS",
  props<{players:Player[]}>()
);

export const updateSelecePlayer=createAction(
  "[Player] UPDATE_SELECE_PLAYER",
  props<{player:Player}>()
);

export const updatePlayer=createAction(
  "[Player] UPDATE_PLAYER",
  props<{player:Player}>()
);

// export const updatePlayerSuccess=createAction(
//   "[Player] UPDATE_PLAYER_SUCCESS",
//   props<{player:Player}>()
// );

// export const updatePlayerFailure=createAction(
//   "[Player] UPDATE_PLAYER_FAILURE",
//   props<{error:string}>()
// );

export const deletePlayer=createAction(
  "[Player] DELETE_PLAYER",
  props<{id:string}>()
);

export const deletePlayerSuccess=createAction(
  "[Player] DELETE_PLAYER_SUCCESS",
  props<{id:string}>()
);

export const deletePlayerFailure=createAction(
  "[Player] DELETE_PLAYER_FAILURE",
  props<{error:string}>()
);
