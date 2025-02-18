const express = require('express')
const cors = require('cors')
const PORT = 5000
const app = express()

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.get("/",(req,res)=>{
  res.send("Welcome to SND Store")
})

app.listen(PORT,()=>console.log(`The Server is running on port http://localhost:${PORT}`))

