const mongoose = require('mongoose');

mongoose
  .connect("mongodb+srv://sndstoreit:xUYBgJxMOIXvgDo0@cluster0.40kic.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

module.exports = mongoose;
