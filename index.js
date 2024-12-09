//importng express in the application
// command >> npm i express
const express = require("express");
// const {users} = require("./data/users.json");
// const {books} = require("./data/books.json");

// creating an application and initializing express
const app = express();

// creating a port where the response is triggered
const port = 8082;

// this means that the response will always be sent in the json format, this application uses json format
app.use(express.json());

/* route : /users
    method: GET 
    description:get all users 
    Access : Public
    Parameters: none */

// app.get("/users", (req,res) => {
//     res.status(200).json({
//         success: true,
//         data: users,
//     })
//     });

/* implementing GET method, where the route is / , and hte two parameters passed are req,res*/
app.get("/",(req,res) => {
    res.status(200).json({ // 200 success status
        "message": "server is running" // if everything is worlign perfectly then this message will be displayed on the UI.
    });
} );

//if there are any route that are not present t indicate those routes "*" is used 
app.get("*", (req,res) => {
    res.status(404).json({
        message: "this route does not exist",
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
