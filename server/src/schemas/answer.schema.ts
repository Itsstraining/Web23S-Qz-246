import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type AnswerDocument = HydratedDocument<Answer>;
@Schema()
export class Answer {   
    @Prop()
    id: number;
    @Prop()
    answer: string;
    @Prop()
    isCorrect: boolean;
}
export const AnswerSchema = SchemaFactory.createForClass(Answer);