import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/User";


const UserSchema = new Schema<IUser>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
