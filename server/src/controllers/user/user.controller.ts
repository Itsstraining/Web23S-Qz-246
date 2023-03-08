import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/users.schema';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    @Get('/all')
    getAll(){
        return this.userService.getAll();
    }
    @Post('create')
    async create(@Body() user: User) {
        return await this.userService.create(user);
    }
    @Delete('delete')
    async delete(@Query('id') id: string) {
        return await this.userService.deleteById(id);
    }
}
