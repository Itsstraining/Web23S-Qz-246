import { Body, Controller, Get,Put,Query } from '@nestjs/common';
import { Delete, Param, Post } from '@nestjs/common/decorators';
import { Player } from 'src/schemas/player.schema';
import { PlayerService } from 'src/services/player/player.service';

@Controller('player')
export class PlayerController {
    constructor(private playerService:PlayerService) { }

    @Get('/all')
    getAll(){
        return this.playerService.getAll();
    }

    @Get ()
    async getById(@Query('id') id: string) {
        let player = await this.playerService.getById(id);
        return player;
    }

    @Post()
    async create(@Body() player: Player) {
        return await this.playerService.create(player);
    }

    @Put()
    async update(@Query('id') id: string,@Body() player: Player) {
        let data = await this.playerService.update(id, player);
        return data;
    }

    @Delete()
    async delete(@Query('id') id: string) {
        return await this.playerService.deleteUser(id);
    }
}
