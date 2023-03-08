import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/questions.schema';

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
            let data= await this.questionModel.findOne({id: id}).exec();
            return data as Question;

        }catch(e){
            console.log(e);
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
    async updateById(_id:string ,question: Question) {
        try{
            let data= await this.questionModel.findByIdAndUpdate(_id,question);
            return data as Question;
        }
        catch(e){
            console.log(e);
            return null;
        }
    }
    async deleteById(id:string){
        try{
            return await this.questionModel.findOneAndDelete({id: id});
        }catch(e){
            console.log(e);
        }
    }
}
