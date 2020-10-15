require("./constants/serverConfig");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// configuracion global de rutas
app.use('api',require("./routes/index"));

// conexion ala base de datos mongo
mongoose.connect(
  "mongodb://localhost:27017/cafe",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) throw err;

    console.log("BD online");
  }
);

app.listen(process.env.PORT, () => {
  console.log("Escuchando puerto", 3000);
});
