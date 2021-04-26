<template>
  <div class="main">
    <div class="image-container">
      <div class="img-row" v-for="(rowImgs, i) in images" :key="i">
        <div class="img-box" v-for="img in rowImgs" :key="img.img_path">
          <img :src="`http://localhost:3004/${img.img_path}`" />
        </div>
      </div>
    </div>

    <!-- <button @click="open"></button> -->
    <span @click="open" class="plus-btn"
      ><font-awesome-icon icon="plus" class="fas plus fa-2x"
    /></span>
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
  max-width: 1200px;
  padding: 20px;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.img-row {
  width: 100%;
  max-height: 320px;
  display: flex;
  /* border: solid 1px grey; */
}

.img-box {
  width: 33%;
  background-color: white;
  padding: 0;
  margin: 0 auto;
  padding-bottom: 30%;
  position: relative;
}
img {
  display: inline;
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  /* top: 0; */
  left: 0;
}

.plus-btn {
  position: fixed;
  right: 5%;
  bottom: 5%;
  cursor: pointer;
}
</style>
