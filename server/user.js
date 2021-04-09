const db = require("./database");

const userData = await db.user_info.findMany({
  where: {
    user_yn: "Y",
  },
});

console.log(userData);

module.exports = userData;
// console.log(db);
