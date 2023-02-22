const express = require('express');
const routes = require('./routes/routes')
//import morgan from "morgan"
//import logger from "./middlewares/logger"

require("dotenv").config();

const app = express()

app.use(express.json());
//app.use(morgan("combined"));
//app.use(logger("tiny"));

app.use(routes)

module.exports = app;