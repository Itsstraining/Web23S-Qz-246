import { createAction, props } from "@ngrx/store";
import { Room } from "src/models/room.model";

export const getRooms = createAction(
  "[Room] GET_ROOMS"
  // props<{page:number,perPage:number}>()
);

export const getRoomsSuccess = createAction(
  "[Room] GET_ROOMS_SUCCESS",
  props<{ rooms: Room[] }>()
);

export const getRoomsFailure = createAction(
  "[Room] GET_ROOMS_FAILURE",
  props<{ error: string }>()
);

export const getRoom = createAction(
  "[Room] GET_ROOM",
  props<{ id: string }>()
);

export const getRoomSuccess = createAction(
  "[Room] GET_ROOM_SUCCESS",
  props<{ room: Room }>()
);

export const getRoomFailure = createAction(
  "[Room] GET_ROOM_FAILURE",
  props<{ error: string }>()
);

export const addNewRoom = createAction(
  "[Room] CREATE_ROOM",
  props<{ room: Room }>()
);

export const addNewRoomSuccess = createAction(
  "[Room] CREATE_ROOM_SUCCESS",
  props<{ room: Room }>()
);

export const addNewRoomFailure = createAction(
  "[Room] CREATE_ROOM_FAILURE",
  props<{ error: string }>()
);

export const updateRoom = createAction(
  "[Room] UPDATE_ROOM",
  props<{ room: Room }>()
);

export const updateRoomSuccess = createAction(
  "[Room] UPDATE_ROOM_SUCCESS",
  props<{ room: Room }>()
);

export const updateRoomFailure = createAction(
  "[Room] UPDATE_ROOM_FAILURE",
  props<{ error: string }>()
);

export const deleteRoom = createAction(
  "[Room] DELETE_ROOM",
  props<{ id: string }>()
);

export const deleteRoomSuccess = createAction(
  "[Room] DELETE_ROOM_SUCCESS",
  props<{ id: string }>()
);

export const deleteRoomFailure = createAction(
  "[Room] DELETE_ROOM_FAILURE",
  props<{ error: string }>()
);

export const joinRoom = createAction(
  "[Room] JOIN_ROOM",
  props<{ id: string }>()
);

export const joinRoomSuccess = createAction(
  "[Room] JOIN_ROOM_SUCCESS",
  props<{ room: Room }>()
);

export const joinRoomFailure = createAction(
  "[Room] JOIN_ROOM_FAILURE",
  props<{ error: string }>()
);

