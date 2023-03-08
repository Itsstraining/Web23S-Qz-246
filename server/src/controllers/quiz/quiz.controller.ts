import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Quiz } from 'src/schemas/quizs.schema';
import { QuizService } from 'src/services/quiz/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService:QuizService){}
    @Get('/all')
    async getAll(){
        return await this.quizService.getAll();
    }
    @Post('create')
    async create(@Body() quiz: Quiz){
        return await this.quizService.create(quiz);
    }
    @Put('update')
    async update(@Query('id') _id: string,@Body() quiz: Quiz) {
        let data = await this.quizService.update(_id, quiz);
        return data;
    }
    @Delete('delete')
    async delete(@Query('id') id: string){
        return await this.quizService.delete(id);
    }
}
