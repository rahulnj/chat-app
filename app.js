import express from 'express';
import {
  developmentErrors,
  productionErrors,
} from './handlers/errorHandlers.js';
import router from './routes/user.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(router);

if (process.env.ENV === 'DEVELOPMENT') {
  app.use(developmentErrors);
} else {
  app.use(productionErrors);
}

export default app;
// brew services start mongodb-community@6.0
//mongosh
