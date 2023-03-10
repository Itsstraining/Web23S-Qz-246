import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Question } from 'src/schemas/question.schema';
import { QuestionService } from 'src/services/question/question.service';

@Controller('question')
export class QuestionController {
    constructor(private questionService:QuestionService){}
    @Get('/all')
    async getAll(){
        return await this.questionService.getAll();
    }

    @Get()
    async getById(@Query('id') id: string){
        return await this.questionService.getById(id);
    }

    @Post()
    async create(@Body() question: Question){
        return await this.questionService.create(question);
    }

    @Put()
    async update(@Query('id') id: string,@Body() question: Question){
        return await this.questionService.update(id, question);
    }

    @Delete()
    async delete(@Query('id') id: string){
        return await this.questionService.delete(id);
    }

}
