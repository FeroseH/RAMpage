const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>RAMpage</h1><p>Go on a RAMpage — a computer parts and accessories marketplace.</p>");
});

app.listen(PORT, () => {
  console.log("Shop at http://localhost:" + PORT);
});
