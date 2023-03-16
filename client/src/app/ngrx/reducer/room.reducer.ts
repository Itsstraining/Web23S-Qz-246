import { createReducer, on } from '@ngrx/store';
import { RoomState } from '../states/room.state';
import * as RoomActions from '../actions/room.action';

export const initialState: RoomState = {
  rooms: [],
  room: null,
  error: "",
  isSuccess: false,
  isLoading: false,
};

export const roomReducer = createReducer(
  initialState,
  on(RoomActions.getRooms, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(RoomActions.getRoomsSuccess, (state, { rooms }) => ({
    ...state,
    rooms,
    isLoading: false,
  })),
  on(RoomActions.getRoomsFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(RoomActions.getRoom, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(RoomActions.getRoomSuccess, (state, { room }) => ({
    ...state,
    room,
    isLoading: false,
  })),
  on(RoomActions.getRoomFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(RoomActions.getRoomByPin, (state,{pin}) => ({
    ...state,
    isLoading: true,
  })),
  on(RoomActions.getRoomByPinSuccess, (state, { room }) => ({
    ...state,
    room:room,
    isLoading: false,
  })),
  on(RoomActions.getRoomByPinFailure, (state, { error }) => ({
    ...state,
    error:error,
    isLoading: false,
  })),
  on(RoomActions.addNewRoom, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(RoomActions.addNewRoomSuccess, (state, { room }) => ({
    ...state,
    rooms: [...state.rooms, room],
    room: room,
    isLoading: false,
  })),
  on(RoomActions.addNewRoomFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(RoomActions.updateRoom, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(RoomActions.updateRoomSuccess, (state, { room }) => ({
    ...state,
    rooms: state.rooms.map((r) => (r.id === room.id ? room : r)),
    isLoading: false,
  })),
  on(RoomActions.updateRoomFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(RoomActions.deleteRoom, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(RoomActions.deleteRoomSuccess, (state, { id }) => ({
    ...state,
    rooms: state.rooms.filter((r) => r.id !== id),
    isLoading: false,
  })),
  on(RoomActions.deleteRoomFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);

