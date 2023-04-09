import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  chatroom: {
    type: mongoose.Schema.Types.ObjectId,
    required: 'Chatroom is required',
    ref: 'Chatroom',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: 'User is required',
    ref: 'User',
  },
  message: {
    type: string,
    required: 'Message is required',
  },
});

export const Message = mongoose.model('Message', messageSchema);
