const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// load all routes here
app.use("/api/todos", require("./routes/api/todos"));

app.listen(PORT, () => {
  console.log(`ExpressJs starter application running on port: ${PORT}`);
});
