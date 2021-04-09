// import { Router } from "express";
// import login from "./login";
const { Router } = require("express");
const login = require("./login");

const router = Router();

console.log("router js");
router.use("", login);

module.exports = router;
