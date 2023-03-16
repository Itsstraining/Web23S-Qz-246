import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UsersDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UsersDocument>){}
    async getAll(): Promise<User[]> {
        try{
            return this.userModel.find().exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async getById(id: string): Promise<User|null> {
        try{
            let data= await this.userModel.findOne({userId:id}).exec();
            return data as User;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    

    async create(user: User) {
        try{
            let find = await this.userModel.findOne({userid:user.userid}).exec();
            if(!find){
                let newUser = await this.userModel.create(user);
                return newUser as User;
            }else{
                return null;
            }


        }catch(e){
            console.log(e);
            return null;
        }
    }

    async updateById(id:string ,user: User) {
        try{
            await this.userModel.findOneAndUpdate({userId:id},user);
            return user 
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async deleteById(id:string): Promise<boolean>{
        try{
            await this.userModel.findOneAndDelete({userId:id});
            return true;

        }catch(e){
            console.log(e);
            return false;
        }
    }
}
