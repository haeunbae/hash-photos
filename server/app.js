const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
const router = require("./router");
const morgan = require("morgan");
const FileStore = require("session-file-store");

const store = FileStore(session);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
passportConfig();

app.use(morgan("dev"));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "test",
    store: new store({ logFn() {} }),
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 1000 * 60 * 60 * 5,
    },
  })
);

app.use("/images", express.static("images"));

app.use("", router);

app.listen(3004, () => {
  console.log("server start on 3004");
});
