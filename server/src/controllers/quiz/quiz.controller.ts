import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Question } from 'src/schemas/question.schema';

import { Quiz } from 'src/schemas/quiz.schema';
import { QuizService } from 'src/services/quiz/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService:QuizService){}
    @Get('/all')
    async getAll(){
        return await this.quizService.getAll();
    }

    @Get()
    async getById(@Query('id') id: string){
        return await this.quizService.getById(id);
    }

    @Post()
    async create(@Body() quiz: Quiz){
        return await this.quizService.create(quiz);
    }

    @Put()
    async update(@Query('id') _id: string,@Body() quiz: Quiz) {
        let data = await this.quizService.update(_id, quiz);
        return data;
    }

    @Put(":id/question")
    async updateArrayQuestion(@Param('id') _id: string, @Query('id') questionId: string) {
        let data = await this.quizService.pushQuestionToQuiz(_id, questionId);
        return data;
    }

    @Delete()
    async delete(@Query('id') id: string){
        return await this.quizService.delete(id);
    }

    @Delete(":id/question")
    async deleteQuestionInQuiz(@Param('id') _id: string, @Query('id') questionId: string){
        return await this.quizService.pullQuestionInQuiz(_id, questionId);
    }
}
