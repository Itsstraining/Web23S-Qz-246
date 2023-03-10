import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerService } from './services/player/player.service';
import { PlayerController } from './controllers/player/player.controller';
import { Player,PlayerSchema } from './schemas/player.schema';
import { Question, QuestionSchema } from './schemas/question.schema';
import { Quiz, QuizSchema } from './schemas/quiz.schema';
import { User, UserSchema } from './schemas/user.schema';
import { Room, RoomSchema } from './schemas/room.schema';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { QuestionController } from './controllers/question/question.controller';
import { QuestionService } from './services/question/question.service';
import { RoomService } from './services/room/room.service';
import { QuizService } from './services/quiz/quiz.service';
import { RoomController } from './controllers/room/room.controller';
import { QuizController } from './controllers/quiz/quiz.controller';
import { QuizGateway } from './gateways/quiz/quiz.gateway';
import { UserModule } from './modules/user/user.module';
import { RoomModule } from './modules/room/room.module';
import { QuestionModule } from './modules/question/question.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { PlayerModule } from './modules/player/player.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://huan84494:Nho12781@cluster0.exzhbug.mongodb.net/Qz'),
    // MongooseModule.forRoot('mongodb+srv://huan84494:Nho12781@cluster0.exzhbug.mongodb.net/?retryWrites=true&w=majority/Qz'),
    MongooseModule.forFeature([
      { name: Player.name, schema: PlayerSchema },
      {name: Question.name, schema: QuestionSchema},
      {name: Quiz.name, schema: QuizSchema},
      {name: User.name, schema: UserSchema},
      {name: Room.name, schema: RoomSchema}
    ]),
    // UserModule,
    // RoomModule,
    // QuestionModule,
    // QuizModule,
    // PlayerModule,
],
  controllers: [AppController, PlayerController, UserController, QuestionController, RoomController, QuizController],
  providers: [AppService, PlayerService, UserService, QuestionService, RoomService,QuizService, QuizGateway ],
})
export class AppModule {}
