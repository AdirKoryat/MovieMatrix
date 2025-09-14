const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');
const userRouter = require('./routers/userRouter');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
  connectDB();
});