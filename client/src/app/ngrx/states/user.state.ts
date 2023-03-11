
import { User } from "src/models/user.model";

export interface UserState {
    users: User[];
    user:User|null;
    loading: boolean;
    error: string;
}
