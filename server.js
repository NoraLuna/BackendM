//localhost port in the environment
require('dotenv').config({"path": `.env.${process.env.NODE_ENV}`});
const port = process.env.port;

//Data Base of mongoose 
const conexiondb = require('./db/conexion.js');
const db_host = process.env.db_host;
conexiondb(db_host);

//Bring models 
require("./models/Graphs");

//Bring app and listen port in the environment 
const app = require('./app');
app.listen(port, () => console.log(`app listening http://localhost:${port}`));
