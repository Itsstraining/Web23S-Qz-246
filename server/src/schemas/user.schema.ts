import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type UsersDocument = HydratedDocument<User>;
@Schema ()
export class User {
    @Prop()
    userid: string;
    @Prop()
    displayName: string;
    @Prop()
    email: string;
    @Prop()
    photoURL: string;
}
export const UserSchema = SchemaFactory.createForClass(User);