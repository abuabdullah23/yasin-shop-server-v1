const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./src/db/connectDB");
const port = process.env.PORT || 5000;

// require routes
const authRoutes = require('./src/routes/v1/authRoutes/authRoutes')
const productsRoutes = require('./src/routes/v1/productsRoutes/productsRoutes')
const categoriesRoutes = require('./src/routes/v1/categoryRoutes/categoryRoutes');
const applyMiddleware = require("./src/middlewares/applyMiddleware");

// middleware
applyMiddleware(app);

// use routes
app.use(authRoutes);
app.use(productsRoutes);
app.use(categoriesRoutes);





app.get("/", (req, res) => {
    res.send("server is running....");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
    const error = new Error(`Can't find [${req.originalUrl}] route on this server`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,

    });
})

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}

main()