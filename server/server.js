const express = require('express')
const cors = require('cors')
const database = require('./config/database');
const i18n = require('./utils/i18nConfig');
const PORT = 5000
const app = express()
const authRoutes = require('./routes/authRoutes');

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use('/auth', authRoutes);
app.get("/",(req,res)=>{
  res.send("Welcome to SND Store")
})


app.listen(PORT,()=>console.log(`The Server is running on port http://localhost:${PORT}`))

