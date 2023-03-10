import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/users.schema';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
    constructor(private userService:UserService){}
    @Get('/all')
    getAll(){
        return this.userService.getAll();
    }
    @Post('signin')
    async create(@Body() user: User) {
        let userId= await this.userService.getById(user.userid);
        console.log(userId);
        if(userId!=null){
            return "User already exists";
        }
        else{
            return this.userService.create(user);
        }
    }
    // @Delete('delete')
    // async delete(@Query('id') id: string) {
    //     return await this.userService.deleteById(id);
    // }
    // @Put('update')
    // async update(@Query('id') id: string, @Body() user: User) {
    //     return await this.userService.updateById(id, user);
    // }
}
