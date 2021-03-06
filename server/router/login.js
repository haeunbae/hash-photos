const { Router } = require("express");
const db = require("../database");
const passport = require("passport");
const bcrypt = require("bcrypt");

const router = Router();

router.post("/login", (req, res, next) => {
  //localStrategy 실행
  passport.authenticate("local", (authError, user, info) => {
    console.log("passport authenticate result :::", authError, user, info);
    if (authError) {
      console.log("authError");
      console.log(authError);
    }

    //req.login -> serializeUser 실행
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError, info);
      }

      res.json({ user, info });
      console.log(req.sessionID);
      console.log(req.user);
    });
  })(req, res, next);
});

router.get("/session", (req, res, next) => {
  console.log(req.user);
  // console.log("req usere::::", req.session.passport.user);
  // if (req.session.passport.user) {
  //   res.json(req.session.passport.user.user_id);
  // }
});

//로그아웃
router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send(err);
    }
    res.send(true);
  });
});

//회원가입
router.post("/signup", async (req, res, next) => {
  const { id, name, pw } = req.body;

  const encodedPw = await bcrypt.hash(pw, 10);

  try {
    const insertUser = await db.user_info.create({
      data: {
        user_id: id,
        user_nm: name,
        user_pw: encodedPw,
        use_yn: "Y",
      },
    });

    res.json(insertUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
