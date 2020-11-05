const express = require('express');
require('./db/mongoose');

//routes constants
const userRoutes = require('./routers/user');


const app = express();
app.use(express.json());

//Routers
app.use(userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('APP IS RUNNING ON PORT '+PORT);
});
