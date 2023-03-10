import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Player } from "./player.schema";
import { Question } from "./question.schema";
import { Quiz } from "./quiz.schema";
export type RoomDocument = HydratedDocument<Room>;
@Schema()
export class Room {
    @Prop()
    id: string;
    @Prop()
    pin: string;
    @Prop()
    createId: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
    players: Player[];
    @Prop({readonly: true})
    quizId: string;
}
export const RoomSchema = SchemaFactory.createForClass(Room);