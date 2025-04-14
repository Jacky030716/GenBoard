const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//   app.listen(8888, () => {
//     console.log('Server running on port 8888');
//   });
// })
// .catch(err => console.error('Error connecting to MongoDB:', err));
