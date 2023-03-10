import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Question } from "src/models/question.model";
export type QuizDocument = HydratedDocument<Quiz>;
@Schema()
export class Quiz {
    @Prop()
    quizId: string;
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
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }] })
    questions: Question[];
}
export const QuizSchema = SchemaFactory.createForClass(Quiz);