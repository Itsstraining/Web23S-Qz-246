import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from 'src/schemas/players.schema';


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
    async create(player: Player) {
        try{
            let newPlayer = await this.playerModel.create(player);
            return newPlayer as Player;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    async update(_id:string ,player: Player) {
        try{
            let data= await this.playerModel.findByIdAndUpdate(_id,player);
            return data as Player;
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
