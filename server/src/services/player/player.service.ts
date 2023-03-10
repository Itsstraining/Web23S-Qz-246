import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from 'src/schemas/player.schema';


@Injectable()
export class PlayerService {
    constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) {}
    
    async getAll(): Promise<Player[]> {
        try{
            return this.playerModel.find().exec();
        }catch(e){
            console.log(e);
            return null;
        }
    }
    
    async getById(id: string): Promise<Player|null> {
        try{
            let data =await this.playerModel.findOne({id: id}).exec();
            return data as Player; 
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async create(player: Player):Promise<Player|null> {
        try{
            await this.playerModel.create(player);
            return player;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async update(id:string ,player: Player) {
        try{
            await this.playerModel.findOneAndUpdate({id:id},player);
            return player ;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async deleteUser(id:string): Promise<boolean>{
        await this.playerModel.findOneAndDelete({id: id});
        return true;
    }


}
