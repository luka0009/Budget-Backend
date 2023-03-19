const express = require('express');
const cors = require('cors');
const budgetRoute = require('./routes/budgetRoute');
require('dotenv').config();
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorhandler');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use('/api', budgetRoute);

app.get("/", (req, res) => {
    res.send("Home Page");
  });



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log('listening to port:', port)
  })
  })
  .catch((err) => console.log(err));
