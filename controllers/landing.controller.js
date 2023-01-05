const fs = require("fs");
exports.landingPage = (req, res, next) => {
  const files = fs
    .readdirSync("/home/atul/Music", { withFileTypes: true })
    .filter((file) => file.name.indexOf(".mp3") !== -1);
  return res.render("pages/landing", {
    title: "Media Player",
    select: "landing",
    files,
  });
};

exports.selectSong = (req, res,next) =>{

}