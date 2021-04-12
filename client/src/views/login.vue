<template>
  <body class="backArea">
    <div>
      <section class="mainArea">
        <h2 style="padding-top: 30px">Login to HashPhotos</h2>
        <h2 class="signUpText">친구들의 사진을 HashTag하세요.</h2>
        <div class="inputArea">
          <label class="inputLabel"
            ><input
              v-model="userId"
              class="inputField"
              type="text"
              placeholder="사용자 ID"
              maxlength="75"
              name="userid"
              value=""
            />
          </label>
          <label class="inputLabel"
            ><input
              v-model="userPw"
              class="inputField"
              type="password"
              placeholder="사용자 PASSWORD"
              maxlength="75"
              name="userpw"
              value=""
            />
          </label>
          <div class="btnArea">
            <button class="signUp" @click="tryLogin">로그인</button>
          </div>
        </div>
        <div class="divider"></div>

        <p class="loginArea">
          계정이 없으신가요? <a href="/signUp" tabindex="0">가입하기</a>
        </p>
      </section>
    </div>
  </body>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      userId: "",
      userPw: "",
    };
  },
  methods: {
    tryLogin() {
      // const userId = document.getElementById('userId').value;
      // const userPw = document.getElementById('userPw').value;

      console.log(this.userId, this.userPw);

      axios
        .post("/login", {
          id: this.userId,
          pw: this.userPw,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.signUpText {
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
}
.backArea {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainArea {
  min-width: 350px;
  height: 500px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
}
.inputArea {
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: 250px;
}
.inputLabel {
  height: 36px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  background: rgba(var(--b3f, 250, 250, 250), 1);
  margin: 0 40px 6px;
  padding: 0;
  width: 80%;
}
.inputField {
  border: 0;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  background: rgba(var(--b3f, 250, 250, 250), 1);
  flex: 1 0 auto;
  width: 90%;
}
.btnArea {
  margin-top: 8px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 8px;
  width: 80%;
}
.signUp {
  background-color: rgba(var(--d69, 0, 149, 246), 1);
  opacity: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: 100%;

  font-size: 14px;
  line-height: 18px;
}

.divider {
  flex-shrink: 1;
  background-color: #dbdbdb;
  background-color: rgba(var(--b38, 219, 219, 219), 1);
  height: 1px;
  position: relative;
  top: 0.45em;
  margin: 10px 40px 18px;
}

.loginArea {
  color: rgba(var(--i1d, 38, 38, 38), 1);
  font-size: 14px;
  margin: 40px 15px 40px 19px;
  text-align: center;
}
</style>
