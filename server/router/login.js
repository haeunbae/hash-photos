// import { Router } from "express";
// import db from "@/database";
// import passport from "@/passport";
const { Router } = require("express");
const db = require("../database");
const passport = require("passport");

const router = Router();

console.log("login js");

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
        return next(loginError);
      }

      res.json({ user });
      console.log(req.sessionID);
      console.log(req.user);
    });
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  req.logout();
  req.session.save(function () {
    res.redirect("/");
  });
});

module.exports = router;
