import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Message {
    @Prop()
    content: string;

    @Prop()
    user: string;

    @Prop()
    createdAt: number;

    @Prop()
    toUser: string;
}

export type MessageDocument = Message & Document;

export const MessageSchema = SchemaFactory.createForClass(Message);