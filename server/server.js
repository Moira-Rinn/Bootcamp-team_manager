const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");

app.use(cors());

require("./routes/players.routes")(app);

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 8000;

app.listen(8000, () => console.log(`Server connected on port ${PORT}`))