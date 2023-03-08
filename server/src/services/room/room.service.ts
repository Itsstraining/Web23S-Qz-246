import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room, RoomDocument } from 'src/schemas/rooms.schema';

@Injectable()
export class RoomService {
    constructor(@InjectModel(Room.name) private roomModel:Model<RoomDocument>) {}
    async getAll(): Promise<Room[]> {
        try{
            return this.roomModel.find().exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }
    async create(room: Room) {
        try{
            let newRoom = await this.roomModel.create(room);
            return newRoom as Room;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    async delete(id:string){
        try{
            return await this.roomModel.findOneAndDelete({id: id});
        }catch(e){
            console.log(e);
        }
    }
    async update(_id:string ,room: Room) {
        try{
            let data= await this.roomModel.findByIdAndUpdate(_id,room);
            return data as Room;
        }catch(e){
            console.log(e);
            return null;
        }
    }
}
