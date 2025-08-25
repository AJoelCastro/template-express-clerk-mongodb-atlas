import { IUserRequest } from "../interfaces/User";
import { UserModel } from "../models/User";
import mongoose from 'mongoose';
export class UserRepository {
    async verifyExistUser (userId:string){
        try{
            return await UserModel.find({userId: userId});
        }catch(error){
            throw error;
        }
    }

}
