import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Answer } from "src/models/answer.model";
export type QuestionDocument = HydratedDocument<Question>;
@Schema()
export class Question {
    @Prop()
    questionType: string;
    @Prop()
    point: number;
    @Prop()
    answerTime: number;
    @Prop()
    backgroundImage: string;
    @Prop()
    title: string;
    @Prop()
    question: string;
    @Prop()
    answers: Answer[];
    @Prop()
    questionId: number;
  
}
export const QuestionSchema = SchemaFactory.createForClass(Question);