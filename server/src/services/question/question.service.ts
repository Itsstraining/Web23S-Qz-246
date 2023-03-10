import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';

@Injectable()
export class QuestionService {
    constructor(@InjectModel(Question.name) private questionModel:Model<QuestionDocument>) {}
    async getAll(): Promise<Question[]> {
        try{
            return this.questionModel.find().exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async getById(id: string): Promise<Question|null> {
        try{
            let data= await this.questionModel.findOne({questionId: id}).exec();
            return data as Question;

        }catch(e){
            // console.log(e);
            return null;
        }
    }
    
    async create(question: Question) {
        try{
            let newQuestion = await this.questionModel.create(question);
            return newQuestion as Question;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async update(id:string ,question: Question) {
        try{
            await this.questionModel.findOneAndUpdate({questionId: id},question);
            return question 
        }
        catch(e){
            console.log(e);
            return null;
        }
    }

    async delete(id:string){
        try{
            await this.questionModel.findOneAndDelete({questionId: id});
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
}
