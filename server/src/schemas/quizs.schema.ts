import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Question } from "src/models/question.model";
export type QuizDocument = HydratedDocument<Quiz>;
@Schema()
export class Quiz {
    @Prop()
    quizId: number;
    @Prop()
    quizName: string;
    @Prop()
    quizDescription: string;
    @Prop()
    quizImage: string;
    @Prop()
    creatorId: string;
    @Prop()
    isPublic: boolean;
    @Prop()
    questions: Question[];
}
export const QuizSchema = SchemaFactory.createForClass(Quiz);