import app from './app.js';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose Connection error:${err}`);
});

mongoose.connection.once('open', () => {
  console.log('Mongodb Connected');
  app.listen(8000, () => {
    console.log('port listening on port 8000');
  });
});
