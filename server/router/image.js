const { Router } = require("express");
const db = require("../database");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage });
// const upload = multer({ dest: "images/" });

const router = Router();

router.post("/image", upload.single("img"), async (req, res, next) => {
  try {
    console.log("file:: ", req.file);
    console.log("body:: ", req.body);

    const insertImg = await db.img_info.create({
      data: {
        img_path: req.file.path,
        img_tag: req.body.hashtag,
        user_id: "haeun.bae.77",
      },
    });

    res.json(insertImg);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
