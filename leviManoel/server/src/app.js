import express from 'express';
import cors from 'cors';

// routes
import testRouter from './routes/test.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', testRouter);

app.listen(3001, () => {
  console.log('app listening on port 3001');
});
