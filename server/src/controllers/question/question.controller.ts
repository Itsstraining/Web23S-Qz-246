import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Question } from 'src/schemas/questions.schema';
import { QuestionService } from 'src/services/question/question.service';

@Controller('question')
export class QuestionController {
    constructor(private questionService:QuestionService){}
    @Get('/all')
    async getAll(){
        return await this.questionService.getAll();
    }
    @Post('create')
    async create(@Body() question: Question){
        return await this.questionService.create(question);
    }
    @Delete('delete')
    async delete(@Query('id') id: string){
        return await this.questionService.deleteById(id);
    }

}
