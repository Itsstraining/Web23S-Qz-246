import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    @Get('/all')
    getAll(){
        return this.userService.getAll();
    }

    @Get()
    async getById(@Query('id') id: string) {
        return await this.userService.getById(id);
    }

    @Post()
    async create(@Body() user: User) {
        return await this.userService.create(user);
    }

    @Put()
    async update(@Query('id') _id: string,@Body() user: User) {
        return await this.userService.updateById(_id, user);
    }
    
    @Delete()
    async delete(@Query('id') _id: string) {
        return await this.userService.deleteById(_id);
    }
}
