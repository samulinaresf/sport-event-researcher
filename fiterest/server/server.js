const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

app.get("/api", (req,res) => {
  res.status(200).send("Hola mundo!")
})

app.listen(PORT, () => {
  console.log(`API en http://localhost:${PORT}`);
});