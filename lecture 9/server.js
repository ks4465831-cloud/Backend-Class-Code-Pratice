const express=require("express")

const app=express()

const PORT=3000
const users=[
    {id:1, name:"Devendra", email:"devendra@example.com"},
    {id:2, name:"Ravi", email:"ravi@example.com"},
    {id:3, name:"alex", email:"alex@example.com"},
    {id:4, name:"vasu", email:"vasu@example.com"},
]

app.get("/",(req,res)=>{
    res.send("this is the server")
})

app.get("/users",(req,res)=>{
    res.json(users)
})

app.listen(PORT,()=>console.log("server is running on 3000"))