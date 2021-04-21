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

router.get("/image", async (req, res, next) => {
  try {
    let getImgs = await db.img_info.findMany();
    let idx = 0;
    let temp = [];
    getImgs = getImgs.reduce((acc, cur, i) => {
      // console.log(acc);
      // console.log(cur);
      // console.log("temp:::", temp);

      if (temp.length < 3) {
        temp.push(cur);
        // console.log(i % 3);
        if (i % 3 == 2) {
          temp.push(cur);
          acc[idx].push(temp);
          idx++;
          temp = [];
        }
      }
      return acc;
    }, []);
    console.log(getImgs);

    // res.json(getImgs);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
