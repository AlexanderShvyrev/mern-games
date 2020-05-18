const express = require("express");
const port = 8000;
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());

require("./server/config/database.config");
require("./server/routes/games.routes")(app)

// We want to have this line run last!
app.listen(port, () => console.log(`Listening on port ${port}`));