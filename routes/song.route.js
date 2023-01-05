const express = require("express");
const { getSongInfo } = require("../controllers/song.controller");
const songRouter = express.Router();

songRouter.post("/info", getSongInfo);

module.exports = songRouter;
