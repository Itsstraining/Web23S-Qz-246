import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type PlayerDocument= HydratedDocument<Player>;
@Schema()
export class Player {
    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    score: number;
    @Prop()
    correctAnswer: number;
}
export const PlayerSchema = SchemaFactory.createForClass(Player);
