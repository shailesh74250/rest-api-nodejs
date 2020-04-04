const express = require("express");
const app = express();
const morgan = require("morgan");
const productRoute = require('./routes/products');
const orderRoute = require('./routes/order');
const bodyParser = require("body-parser");
// request log in console
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
  
// routing
app.use("/products", productRoute);
app.use("/orders", orderRoute);

// if above route not invoke then request come to this error handling middleware
app.use((req, res, next) => {
    const error = new Error("Not found!");
    error.status = 404;
    next(error);
})

// if error.status not found then it will give internal server error 500
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})
module.exports = app;