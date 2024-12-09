# book-record-management

>> git pull origin main
>> npm init
>> npm i nodemon --save-dev
>> npm i express


## json method 
app.get("/",(req,res) => {
    res.status(200).json({ 
        "message": "server is running" 
    });
} );
## normal text/raw method
# the problem with ".send" method is that we can send only one message to the browser, i,e "server is runnning" it'll show error if we try multipe messages
app.get("/",(req,res) => {
    res.status(200).send("server is running");
    };
} );

