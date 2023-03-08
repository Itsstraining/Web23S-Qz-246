import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from 'src/schemas/quizs.schema';

@Injectable()
export class QuizService {
    constructor(@InjectModel(Quiz.name) private quizModel: Model<QuizDocument>) {}
    async getAll(): Promise<Quiz[]> {
        try{
            return this.quizModel.find().exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }
    async create(quiz: Quiz) {
        try{
            let newQuiz = await this.quizModel.create(quiz);
            return newQuiz as Quiz;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    async delete(id:string){
        try{
            return await this.quizModel.findOneAndDelete({id: id});
        }catch(e){
            console.log(e);
        }
    }
    async update(_id:string ,quiz: Quiz) {
        try{
            let data= await this.quizModel.findByIdAndUpdate(_id,quiz)
            return data as Quiz;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    

}
