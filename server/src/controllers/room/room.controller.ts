import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Room } from 'src/schemas/rooms.schema';
import { RoomService } from 'src/services/room/room.service';

@Controller('room')
export class RoomController {
    constructor(private roomService:RoomService) { }
    @Get('/all')
    async getAll(){
        return await this.roomService.getAll();
    }
    @Put('update')
    async update(@Query('id') _id: string,@Body() room: Room) {
        let data = await this.roomService.update(_id, room);
        return data;
    }
    @Post('create')
    async create(@Body() room: Room) {
        return await this.roomService.create(room);
    }
    @Delete('delete')
    async delete(@Query('id') _id: string) {
        return await this.roomService.delete(_id);
    }
}
