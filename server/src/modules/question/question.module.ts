import { Module } from '@nestjs/common';
import { QuestionController } from 'src/controllers/question/question.controller';
import { QuestionService } from 'src/services/question/question.service';

@Module({
  imports: [],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
