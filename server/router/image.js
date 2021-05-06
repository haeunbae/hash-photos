const { Router } = require("express");
const db = require("../database");
const multer = require("multer");
const uuid = require("uuid");
const path = require("path");

// const img_uuid = uuid.v1();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v1() + file.originalname);
  },
});

let upload = multer({ storage: storage });

const router = Router();

//img 등록
router.post("/image", upload.single("img"), async (req, res, next) => {
  try {
    console.log("file path : ", req.file.path);
    console.log("hashtag : ", req.body.hashtag);
    console.log("user ID : ", req.user);
    // console.log("uuuid ::: ", img_uuid);
    const insertImg = await db.img_info.create({
      data: {
        img_path: req.file.path,
        img_tag: req.body.hashtag,
        user_id: req.user.user_id,
      },
    });
    console.log(insertImg);
    res.json(insertImg);
  } catch (error) {
    console.log(error);
  }
});

//images조회 (3개씩 분할 조회)
router.get("/image/list", async (req, res, next) => {
  try {
    let getImgs = await db.img_info.findMany();

    formatImgs = division(getImgs, 3);
    console.log(formatImgs);

    res.json({ getImgs, formatImgs });
  } catch (error) {
    console.log(error);
  }
});

//img개별 조회
router.get("/image", async (req, res, next) => {
  try {
    let img_id = req;
    console.log(img_id);
    const img = await db.img_info.findFirst({
      where: {
        img_id,
      },
    });
    // res.json(img);
  } catch (error) {
    console.log(error);
  }
});

function division(arr, size) {
  let i,
    j,
    temp = [];

  for (i = 0, j = arr.length; i < j; i += size) {
    temp.push(arr.slice(i, i + size));
  }

  return temp;
}

module.exports = router;
