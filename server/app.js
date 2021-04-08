const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");

const app = express();

app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
passportConfig();

app.listen(3004, () => {
  console.log("server start");
});
