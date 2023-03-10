import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from 'src/schemas/player.schema';
import { Room, RoomDocument } from 'src/schemas/room.schema';

@Injectable()
export class RoomService {
    constructor(@InjectModel(Room.name) private roomModel:Model<RoomDocument>,
    @InjectModel(Player.name) private playerModel:Model<PlayerDocument>) {}
    async getAll(): Promise<Room[]> {
        try{
            return this.roomModel.find().populate('players').exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }
    // 
    async getOne(id:string): Promise<Room> {
        try{
            return this.roomModel.findOne({id: id}).populate("players").exec();
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

    async update(id:string ,room: Room) {
        try{
            let players=room.players;
            room.players=[];
            room.id=Date.now().toString();
            await this.roomModel.findOneAndUpdate({id:id},room);

            await players.forEach( async (player:any) => {
                player.id=Date.now().toString();
                let newPlayer= await this.playerModel.create(player);
                await this.roomModel.findOneAndUpdate(
                    {id: id},
                    { $push: {
                        players: newPlayer._id
                    }}
                )
            })
            return room;
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
}
