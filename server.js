const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const connection = require("./db");

app.get("/allProjects",(req,res)=>{

    connection.query(
        "SELECT * FROM project_details",
        (err,result)=>{
            if(err){
                return res.status(500).send(err);
            }
            res.json(result);
        }
    );

});

app.post("/sendMessage",(req,res)=>{

    const {name,email,message} = req.body;

    connection.query(
        "INSERT INTO user_messages(name,email,message) VALUES(?,?,?)",
        [name,email,message],
        (err,result)=>{
            if(err){
                return res.status(500).send(err);
            }
            res.send("Message Stored");
        }
    );

});

app.listen(5000,()=>{
    console.log("Portfolio Server Started");
});
