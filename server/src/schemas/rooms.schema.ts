import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type RoomDocument = HydratedDocument<Room>;
@Schema()
export class Room {
    @Prop()
    id: number;
    @Prop()
    pin: string;
    @Prop()
    createId: string;
    @Prop()
    players: string[];
    @Prop()
    quizId: string;

}
export const RoomSchema = SchemaFactory.createForClass(Room);