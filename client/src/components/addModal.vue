<template>
  <div class="modal" v-if="showModal">
    <div class="overlay"></div>
    <div class="modal-card">
      <!-- <slot /> -->
      <div class="modal-header">

        <h3>upload your image</h3>
        <span @click="close"><font-awesome-icon icon="times" class="fas times fa-2x"/></span>
        
      </div>
      <vue-dropzone
        ref="imgDropZone"
        id="customdropzone"
        :options="dropzoneOptions"
        @vdropzone-complete="afterComplete"
      ></vue-dropzone>

        <p class="info">Type your hashtag and click enter.</p>
      <div class="wrapper">
  <input type="text" id="hashtags" autocomplete="off">
  <div class="tag-container">
  </div>
</div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        addRemoveLinks: false,
        acceptedFiles: ".jpg, .jpeg, .png",
        dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag Images or Click Here</p>
          <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>
          `,
      },
      images: [],
    };
  },
  methods: {
    open() {
      this.showModal = true;
      console.log(this.showModal);
    },
    close() {
      this.showModal = false;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400');
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
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
    max-width: 80%;
    /* left: 25%; */
    top: 20%;
  margin: auto;
  width:50%;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
  animation-name: animatetop;
  animation-duration: 0.8s;
 
}
.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;;
  align-items: center;
}

.close {
  margin-left: auto;
}

h3 {
  color: white
}
/* 
.dropzone {
    min-height: 300px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: white;
    padding: 20px 20px;
} */


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
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  outline: none;
}

.tag-container {
  display: flex;
  flex-flow: row wrap;
}

.tag{
  pointer-events: none;
  background-color: #242424;
  color: white;
  padding: 6px;
  margin: 5px;
}

.tag::before {
  pointer-events: all;
  display: inline-block;
  content: 'x';  
  height: 20px;
  width: 20px;
  margin-right: 6px;
  text-align: center;
  color: #ccc;
  background-color: #111;
  cursor: pointer;
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
