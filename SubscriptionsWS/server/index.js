const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');
const loadData = require('./utils/setup');
const subscriptionRouter = require('./routers/subscriptionRouter');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/subscription', subscriptionRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
  connectDB();
  loadData();
});