const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./database");
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.serializeUser((user, done) => {
    // Strategy 성공 시 세션에 user정보 저장
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });
  passport.deserializeUser((user, done) => {
    //서버 요청 들어올때마다 세션에 저장된(serializeUser) 정보와 db정보를 비교
    // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    done(null, user); // 여기의 user가 req.user가 됨
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "pw",
        session: true, // 세션에 저장 여부
        passReqToCallback: false,
      },
      async (id, pw, done) => {
        const userData = await db.user_info.findFirst({
          where: {
            use_yn: "Y",
            user_id: id,
          },
        });

        if (!userData)
          return done(null, false, {
            message: "사용자 정보를 찾을수 없습니다.",
          });

        //비밀번호 비교 다시 확인
        // const comparePw = await bcrypt.compare(userData.user_pw, pw);
        // console.log(comparePw);
        // if (!comparePw)
        //   return done(null, false, {
        //     message: "사용자 패스워드 에러입니다.",
        //   });

        return done(null, userData, {
          message: "로그인 성공",
        }); // 검증 성공
      }
    )
  );
};
