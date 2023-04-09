import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: 'Name is required',
    },
    email: {
      type: string,
      required: 'Email is required',
    },
    password: {
      type: string,
      required: 'Password is required',
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
