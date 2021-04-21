<template>
  <div class="main">
    <div class="image-container">
      <div class="img-row">
        <div class="img-box" v-for="img in images" :key="img.img_path">
          <img :src="`http://localhost:3004/${img.img_path}`" />
          <!-- <img src="../assets/logo.png" /> -->
        </div>
      </div>
    </div>

    <button @click="open">test</button>
    <modal ref="modal"></modal>
  </div>
</template>

<script>
import modal from "../components/addModal";
export default {
  components: {
    modal,
  },
  data() {
    return {
      showModal: false,
      images: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    open() {
      // this.showModal = !this.showModal;
      this.$refs.modal.open();
    },
    fetch() {
      this.$axios
        .get("/image")
        .then((res) => {
          console.log(res);
          this.images = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.main {
  text-align: center;
  margin: 0 auto;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
}
.image-container {
  margin: auto;
  max-width: 80vw;
  min-height: calc(100vh - 54px);
  /* max-width: 800px;
  height: 100%; */
  padding: 20px;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.img-row {
  /* max-width: 819px; */
  /* width: 100%; */
}

.img-box {
  max-width: 273px;
  max-height: 273px;
  width: 33%;
  /* height: 300px; */
  background-color: white;
  padding: 0;
  margin: 10px;
  /* display: inline; */
}
img {
  display: inline;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
