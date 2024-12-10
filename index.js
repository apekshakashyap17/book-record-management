//importng express in the application
// command >> npm i express
const express = require("express");
const {users} = require("./data/users.json");
const {books} = require("./data/books.json");

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
app.get("/users", (req,res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
    });


    /* route : /users/{id}
    method: GET 
    description:get all users 
    Access : Public
    Parameters: id */
// for retreiving the id from the url 
app.get("/users/:id", (req,res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id );
    if(!user){
        return res.status(404).json({
            Success: false,
            message: "User does not exist !",
        });
    }
    res.status(200).json({
        success: true,
        message: "User found",
        data: user,
    });
});


/* route : /users
    method: POST 
    description: creating a new user 
    Access : Public
    Parameters: none */

app.post("/users", (req,res) => {
    const {id, name ,surname, email, subscriptionType, subscriptionDate} = req.body;

    const user = users.find((each) => each.id === id );

    if(user) {
        return res.status(404).json({
            success: false,
            message: "user with this Id already exists",
        });
    }

    users.push({
        id, 
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    });

    return res.status(201).json({
        success: true,
        message: "info updated/ User added successfully",
        data: users,
    })
});


/* route : /users/{id}
    method: PUT 
    description: updating a user by their id 
    Access : Public
    Parameters: id */

    app.put("/users/:id", (req, res) => {
        const { id } = req.params;
        const { data } = req.body;
      
        const user = users.find((each) => each.id === id);
        if (!user) {
          return res.status(404).json({
            success: false,
            message: "User Doesn't Exist !!",
          });
        }
        const updateUserData = users.map((each) => {
          if (each.id === id) {
            return {
              ...each,
              ...data,
            };
          }
          return each;
        });
        return res.status(200).json({
          success: true,
          message: "User Updated !!",
          data: updateUserData,
        });
      });
      
      /* route : /users/{id}
    method: DELETE 
    description: deleting a user by their id 
    Access : Public
    Parameters: ID */

app.delete("/user/:id", (req,res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Doesn't Exist !!",
      });
    }
});

    

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
