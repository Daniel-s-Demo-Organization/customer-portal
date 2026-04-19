const express = require("express");
const app = express();
const searchRoute = require("./routes/search");

app.use("/search", searchRoute);

app.listen(3000, () => {
  console.log("Customer portal running on port 3000");
});
