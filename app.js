const bodyParser = require("body-parser");
const express = require("express");
const landingRouter = require("./routes/landing.route");
const songRouter = require("./routes/song.route");
const { statusCodes } = require("./statusCodes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/landing", landingRouter);
app.use("/song", songRouter);
app.use("*", (req, res) => {
  const message = `${req.originalUrl} doesn't exist on server`;
  return res.status(statusCodes.NOT_FOUND).json({ status: false, message });
});

app.listen(3000, () => {
  console.log("Running !!");
});
