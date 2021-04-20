const { Router } = require("express");
const db = require("../database");
const multer = require("multer");

// const upload = {
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "images/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   }),
// };
const upload = multer({ dest: "images/" });

const router = Router();

router.post("/image", upload.single("img"), async (req, res, next) => {
  try {
    console.log("req :: ", req.files);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
