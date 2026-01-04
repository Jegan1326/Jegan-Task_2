const mongoose = require("mongoose");
const Book = require("./book");

mongoose.connect("mongodb://127.0.0.1:27017/Library_Database")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));
