import mongoose from 'mongoose';

const chatRoomSchema = new mongoose.Schema({
  name: {
    type: string,
    required: 'Name is required',
  },
});

export const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);
