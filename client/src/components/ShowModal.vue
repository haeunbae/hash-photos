<template>
  <div class="modal" v-if="showModal">
    <div class="overlay"></div>
    <span @click="close" class="close-btn"
      ><font-awesome-icon icon="times" class="fas times fa-2x"
    /></span>
    <div class="modal-card">
      <!-- modal header-->
      <!-- <div class="modal-header">
        <h3>hashtag</h3>
        
      </div> -->
      <!--modal content-->
      <!-- <div class="card-wrapper">
        <button class="save-btn" @click="save"><h3>save it!</h3></button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      image: {},
      imgInfo: {
        imgFile: null,
        hashtag: "",
      },
      uploadUser: "",
    };
  },
  watch: {
    hashtag() {
      this.submit();
    },
  },
  created() {},
  methods: {
    open(img_id) {
      this.showModal = true;

      console.log(img_id);
      this.fetch(img_id);
    },
    close() {
      this.showModal = false;
    },
    fetch(img_id) {
      // let params = {
      //   img_id,
      // };

      this.$axios
        .get("/image", img_id)
        .then((res) => {
          console.log(res.data);
          // this.image = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    save() {},
    vfileAdded(file) {
      console.log(file);
      this.imgInfo.imgFile = file;
    },
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Work+Sans:300,400"); */
/* Modal */
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.3;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  z-index: 10;
  top: 20%;
  margin: auto;
  width: 50%;
  background-color: white;
  min-height: 500px;
  opacity: 1;
  animation-name: animatetop;
  animation-duration: 0.8s;
}

.close {
  margin-left: auto;
}

h3 {
  color: white;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
}
.dropzone {
  min-height: 300px;
  background: white;
  /* padding: 20px 20px; */
  flex-grow: 2;
  height: 300px;
}

.dropzone .dz-preview {
  position: relative;
  display: inline-block;
  vertical-align: top;
  /* margin: 16px; */
  min-height: 100px;
}

.vue-dropzone > .dz-preview .dz-details {
  background-color: rgba(33, 150, 243, 0);
}

.dropzone .dz-preview.dz-image-preview {
  width: 100%;
  height: 100%;
}

.dropzone .dz-progress {
  display: none;
}

.wrapper {
  padding: 0;
  margin: 0;
  /* width: 580px; */
  background-color: darkseagreen;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  border: solid 0px white;
}

/* h3 {
  margin: 10px 14px 10px 0;
  font-weight: 300;
  font-size: 36px;
} */

p {
  margin: 10px 10px;
  font-weight: 300;
  font-size: 14px;
  opacity: 0.8;
  letter-spacing: 1px;
}

input {
  border: none;
  border-radius: 12px;
  padding: 16px 20px;
  margin: 8px;
  width: 100%;
  color: #666;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  outline: none;
}

.tag-container {
  display: flex;
  flex-flow: row wrap;
}

.tag {
  pointer-events: none;
  background-color: #242424;
  color: white;
  padding: 6px;
  margin: 5px;
}

.tag::before {
  pointer-events: all;
  display: inline-block;
  content: "x";
  height: 20px;
  width: 20px;
  margin-right: 6px;
  text-align: center;
  color: #ccc;
  background-color: #111;
  cursor: pointer;
}

.save-btn {
  background: lightgrey;
  border: none;
  margin-top: 10px;
}

.close-btn {
  position: fixed;
  right: 20px;
  top: 20px;
  color: white;
}
@keyframes animatetop {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 20%;
    opacity: 1;
  }
}
</style>
