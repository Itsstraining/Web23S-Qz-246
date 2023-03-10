import { Module } from '@nestjs/common';
import { PlayerController } from 'src/controllers/player/player.controller';
import { PlayerService } from 'src/services/player/player.service';

@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
