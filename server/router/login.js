const { Router } = require("express");
const db = require("../database");
const passport = require("passport");

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

//로그아웃 기능 확인 필요 (예정)
router.get("/logout", (req, res, next) => {
  req.logout();
  req.session.save(function () {
    res.redirect("/");
  });
});

router.post("/signup", async (req, res, next) => {
  const { id, name, pw } = req.body;

  try {
    const insertUser = await db.user_info.create({
      data: {
        user_id: id,
        user_nm: name,
        user_pw: pw,
        use_yn: "Y",
      },
    });

    res.json(insertUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
