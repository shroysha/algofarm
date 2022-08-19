import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  wallet: {
    type: String,
    required: true,
  },
  nonce: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
