import { Module } from '@nestjs/common';
import { QuizController } from 'src/controllers/quiz/quiz.controller';
import { QuizService } from 'src/services/quiz/quiz.service';

@Module({
  imports: [],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
