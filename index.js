const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send({ nombre: "Juan Pedro", apellido: "Perez" });
});

const PORT = 8000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
