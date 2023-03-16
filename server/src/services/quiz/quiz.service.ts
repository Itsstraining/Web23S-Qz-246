import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';
import { Quiz, QuizDocument } from 'src/schemas/quiz.schema';
import { QuestionService } from '../question/question.service'; 
@Injectable()
export class QuizService {
    constructor(@InjectModel(Quiz.name) private quizModel: Model<QuizDocument>,
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>
    ) {}
    async getAll(): Promise<Quiz[]> {
        try{
            return this.quizModel.find().populate('questions').exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async getById(id:string): Promise<Quiz|null> {
        try{
            let data= await this.quizModel.findOne({quizId: id}).populate('questions').exec();
            return data as Quiz;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    
    async getQuizzesByUserId(id:string): Promise<Quiz[]> {
        try{
            console.log(id);
            let data= await this.quizModel.find({creatorId: id}).populate('questions').exec();
            return data as Quiz[];
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async create(quiz: Quiz) {
        try{
            let questions=quiz.questions;
            quiz.questions=[];
            quiz.quizId=Date.now().toString();
            let newQuiz = await this.quizModel.create(quiz);

            await questions.forEach( async (question:any) => {
                question.questionId=Date.now().toString();
                let newQuestion= await this.questionModel.create(question);
                // console.log(newQuestion._id);
                // questions.push(newQuestion._id);
                await this.quizModel.findOneAndUpdate(
                    {quizId: newQuiz.quizId},
                    { $push: {
                        questions: newQuestion._id
                    }}
                )
            })
            return newQuiz;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async update(id:string ,quiz: Quiz) {
        try{
            await this.quizModel.findOneAndUpdate({quizId: id},quiz)
            return quiz;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async pushQuestionToQuiz(id:string ,questionId: string) {
        try{
            let newQuestion= await this.questionModel.findOne(
                {questionId: questionId},
                ).exec();

            await this.quizModel.findOneAndUpdate(
                {quizId: id},
                { $push: {
                    questions: newQuestion._id
                }}
            )
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }

    async delete(id:string){
        try{
            await this.quizModel.findOneAndDelete({quizId: id});
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }

    async pullQuestionInQuiz(id:string ,questionId: string) {
        try{
            let newQuestion= await this.questionModel.findOne(
                {questionId: questionId},
                ).exec();

            await this.quizModel.findOneAndUpdate(
                {quizId: id},
                { $pull: {
                    questions: newQuestion._id
                }}
            )
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
}
