const { filesPath } = require("../config");
const fs = require("fs");
const musicMetadata = require("music-metadata-browser");
const { statusCodes } = require("../statusCodes");
exports.getSongInfo = async (req, res, next) => {
  try {
    console.log(req.body);
    const { filename } = req.body;
    if (!filename) {
      return res.status(statusCodes.NOT_FOUND).json({ status: false });
    }
    const metatdata = await musicMetadata.parseReadableStream(
      fs.createReadStream(`${filesPath}/${filename}`)
    );
    console.log(metatdata);
    return res.status(statusCodes.OK).json({ status: true, file: {} });
  } catch (error) {
    return res
      .status(statusCodes.NO_CONTENT)
      .json({ status: false, message: "Error occured" });
  }
};
