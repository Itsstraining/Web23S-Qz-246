import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type UsersDocument = HydratedDocument<User>;
@Schema ()
export class User {
    @Prop({required:true})
    userId: string;
    @Prop()
    userName: string;
    @Prop()
    userAvatar: string;
    
}
export const UserSchema = SchemaFactory.createForClass(User);