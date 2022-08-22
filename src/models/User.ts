import { IUser } from '@lib/types';
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  wallet: {
    type: String,
    required: true,
    unique: true,
  },
});

export const User =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
