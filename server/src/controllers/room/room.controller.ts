import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Room } from 'src/schemas/room.schema';
import { RoomService } from 'src/services/room/room.service';

@Controller('room')
export class RoomController {
    constructor(private roomService:RoomService) { }
    @Get('/all')
    async getAll(){
        return await this.roomService.getAll();
    }
    @Get()
    async get(@Query('id') _id: string) {
        return await this.roomService.getOne(_id);
    }
    // 
    @Post()
    async create(@Body() room: Room) {
        return await this.roomService.create(room);
    }

    @Put()
    async update(@Query('id') _id: string,@Body() room: Room) {
        let data = await this.roomService.update(_id, room);
        return data;
    }


    @Delete()
    async delete(@Query('id') _id: string) {
        return await this.roomService.delete(_id);
    }
}
