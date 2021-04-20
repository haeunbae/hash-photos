// import { Router } from "express";
// import login from "./login";
const { Router } = require("express");
const login = require("./login");
const image = require("./image");

const router = Router();

console.log("router js");
router.use("", login);
router.use("", image);

module.exports = router;
