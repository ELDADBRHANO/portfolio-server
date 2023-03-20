const dotEnv = require("dotenv");
dotEnv.config();
const express = require("express");
const cors = require("cors");
require("./DB");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const projectsRouter = require("./routes/projects");
const eldadRouter = require("./routes/eldad");

app.use("/api/projects", projectsRouter);
app.use("/api/eldad", eldadRouter);
app.get("/", (req, res) => {
  res.send({ message: "success" });
});

app.listen(port, () => {
  console.log(`app is up on port:${port}`);
});
