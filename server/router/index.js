// import { Router } from "express";
// import login from "./login";
const { Router } = require("express");
const login = require("./login");
const image = require("./image");
const jwt = require("jsonwebtoken");

const router = Router();

console.log("router js");
router.use("", login);
router.use("", image);

router.post("/api/authentication", async (req, res) => {
  console.log("token api");
  console.log(req.body);

  let token = jwt.sign(req.body, "card-mind-key");

  let result = {
    isLogin: true,
    token: token,
  };
  console.log(result);

  //   next();
  res.json(result);
});

module.exports = router;
