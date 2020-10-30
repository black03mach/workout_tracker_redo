require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/htmlroutes");
const routes2 = require("./routes/apiroutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);
app.use(routes2);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts",
 {
        useNewUrlParser: true
    }, function (err, db) {
        if(err){
            console.log(err)
        }
        else{
            console.log("connected")
        }
    }
);

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});