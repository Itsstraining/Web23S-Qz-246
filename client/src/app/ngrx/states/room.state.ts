import { Room } from "src/models/room.model";

export interface RoomState{
  rooms: Room[];
  room: Room;
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}
