//Bring express
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("cors")());

app.use("/", require("./routes/graph"));

//Setup Error Handlers
const errorhandlers = require('./handlers/errorhandlers');
app.use(errorhandlers.notFound);
app.use(errorhandlers.mongoseErrors);
app.use(errorhandlers.developmentErrors);

module.exports = app;