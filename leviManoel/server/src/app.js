import express from 'express';
import cors from 'cors';

// routes
import pessoasRouter from './routes/pessoas.router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log('app listening on port 3001');
});
