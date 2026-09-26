const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
// ye ek middleware hai

// app.get('/', (req, res) => {
//     console.log("Request URL: ", req.url);
//     console.log("Request Method: ", req.method);
//     console.log("Request Headers: ", req.headers);
    
//     res.send('Hello Welcome to the get request!');
// });


// app.get('/:id', (req, res) => {
//     console.log("Request URL: ", req.url);
//     console.log("Request Method: ", req.method);
//     console.log("Request Headers: ", req.headers);
//     console.log("Request Params: ", req.params.id);
//     res.send('Hello Welcome to the get request!');
// });


app.get('/about', (req, res) => {
    // console.log("Request URL: ", req.url);
    // console.log("Request Method: ", req.method);
    // console.log("Request Headers: ", req.headers);
    console.log("Request Query: ", req.query);
    res.send('welcome to the about page!');
});



    // console.log("Request URL: ", req.url);
    // console.log("Request Method: ", req.method);
    // console.log("Request Headers: ", req.headers);
//     console.log("Request Body: ", req.body);
//     res.send('Hello Welcome to the post request!');
// });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});