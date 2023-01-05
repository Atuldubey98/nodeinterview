const express = require("express");
const { landingPage } = require("../controllers/landing.controller");

const landingRouter = express.Router();
landingRouter.get("/", landingPage);
module.exports = landingRouter;
