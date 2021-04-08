import { Router } from "express";
import db from "@/database";
import passport from "@/passport";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);
