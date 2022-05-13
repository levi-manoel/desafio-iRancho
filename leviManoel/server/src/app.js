import express from 'express';
import cors from 'cors';

import pessoasRouter from './routes/pessoas.router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pessoas', pessoasRouter);

app.listen(3001, () => {
  console.log('app listening on port 3001');
});

export default app;
