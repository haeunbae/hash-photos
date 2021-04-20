const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
const router = require("./router");
const morgan = require("morgan");
const FileStore = require("session-file-store");
const cors = require("cors");

// app.post('/up', upload.single('img'), (req, res) => {
//   console.log(req.file);
// });

const store = FileStore(session);

const app = express();

//고정된 주소로만 교차 출처 리소스 사용
// const corsOptions = {
//   origin: "http://localhost:8080",
//   credential: true,
// };

//동적인 주소 사용
const corsOptions = {
  origin(origin, callback) {
    callback(null, true);
  },
  credentials: true,
};

// app.use(upload);
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Pragma"
  );
  res.header("Cache-Control", "no-cache");
  res.header("Pragma", "no-cache");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

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

app.use(express.json({ limit: "mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: false }));

app.use("", router);

app.listen(3004, () => {
  console.log("server start on 3004");
});
