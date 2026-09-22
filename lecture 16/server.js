const express = require('express');
// const morgan = require('morgan');
const app = express();
const port = 3000;

// app.use(morgan('dev'));
// app.use(morgan('combined'));

// const logMiddleware = (req, res, next) => {
//     console.log("Req url:", req.url,"Time:", new Date().toLocaleString());
//     // res.send("hello from middleware");
//     next();
// };

const welcomeMiddleware = (req, res, next) => {
    console.log("Welcome to my Website");
    next();
};

// app.use(authMiddleware);   global middleware
app.use(welcomeMiddleware);
// app.use(logMiddleware);


app.get('/', (req, res) => {
    console.log("Homepage visited");
    res.send('Hello World');
});


app.get('/about', (req, res) => {
    console.log("About Page Visited");

    res.send('About page');
});

// app.get('/about',authMiddleware, (req, res) => {
//     console.log("About Page Visited");
//     res.send('Hello about page!');
// });
// authMiddleware = route level middleware

// app.use((req, res) => {
//     res.status(404).send("Route not found");          invalid route middleware

// app.use((req, res) => {
    //     res.status(404).json({success: false, message: "Route not found"});
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});