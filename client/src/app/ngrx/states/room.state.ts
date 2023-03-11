import { Room } from "src/models/room.model";

export interface RoomState{
  rooms: Room[];
  room: Room|null;
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}
