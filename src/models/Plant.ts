import { IPlant } from '@lib/types';
import mongoose, { Schema } from 'mongoose';

const PlantSchema = new Schema({
  assetId: {
    type: Number,
    required: true,
  },
  timesWatered: {
    type: Number,
    required: true,
    default: 0,
  },
  owner: {
    type: String,
    required: true,
  },
  lastWateredTime: {
    type: Number,
    required: true,
  },
});

export const Plant =
  mongoose.models.Plant || mongoose.model<IPlant>('Plant', PlantSchema);
