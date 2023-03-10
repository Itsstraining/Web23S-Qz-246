import { Module } from '@nestjs/common';
import { PlayerController } from 'src/controllers/player/player.controller';
import { RoomController } from 'src/controllers/room/room.controller';
import { PlayerService } from 'src/services/player/player.service';
import { RoomService } from 'src/services/room/room.service';

@Module({
  imports: [],
  controllers: [RoomController,PlayerController],
  providers: [RoomService,PlayerService],
  exports: [RoomService]
})
export class RoomModule {}
