const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
//need api routes

app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
