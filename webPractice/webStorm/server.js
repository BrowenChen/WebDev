/**
 * Created by owenchen on 6/28/14.
 */
var mongoose = require("mongoose");
var express = require("express");

var app = express();
mongoose.connect('mongodb://localhost/jetbrains');

var Product = mongoose.model({name: "Webstorm"});


app.get("/", function(req, res) {
    Product.find(function (err, products) {
        res.send(products);
    })
})

app.listen(3000);