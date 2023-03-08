import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerService } from './services/player/player.service';
import { PlayerController } from './controllers/player/player.controller';
import { Player,PlayerSchema } from './schemas/players.schema';
import { Question, QuestionSchema } from './schemas/questions.schema';
import { Quiz, QuizSchema } from './schemas/quizs.schema';
import { User, UserSchema } from './schemas/users.schema';
import { Room, RoomSchema } from './schemas/rooms.schema';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { QuestionController } from './controllers/question/question.controller';
import { QuestionService } from './services/question/question.service';
import { RoomService } from './services/room/room.service';
import { QuizService } from './services/quiz/quiz.service';
import { RoomController } from './controllers/room/room.controller';
import { QuizController } from './controllers/quiz/quiz.controller';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://huan84494:Nho12781@cluster0.exzhbug.mongodb.net/Qz'),
    // MongooseModule.forRoot('mongodb+srv://huan84494:Nho12781@cluster0.exzhbug.mongodb.net/?retryWrites=true&w=majority/Qz'),
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
    MongooseModule.forFeature([{name: Question.name, schema: QuestionSchema}]),
    MongooseModule.forFeature([{name: Quiz.name, schema: QuizSchema}]),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    MongooseModule.forFeature([{name: Room.name, schema: RoomSchema}]),

],
  controllers: [AppController, PlayerController, UserController, QuestionController, RoomController, QuizController],
  providers: [AppService, PlayerService, UserService, QuestionService, RoomService, QuizService],
})
export class AppModule {}
