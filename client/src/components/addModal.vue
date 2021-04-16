<template>
  <div class="modal" v-if="showModal">
    <div class="overlay"></div>
    <div class="modal-card">
      <!-- <slot /> -->
      <div class="modal-header">
        <span class="close" @click="close">&times;</span>
        <!-- <h2>Modal Header</h2> -->
      </div>
      <vue-dropzone
        ref="imgDropZone"
        id="customdropzone"
        :options="dropzoneOptions"
        @vdropzone-complete="afterComplete"
      ></vue-dropzone>
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
        thumbnailWidth: 150,
        thumbnailHeight: 150,
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
  margin: auto;
  margin-top: 30px;
  /* padding: 20px; */
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
  animation-name: animatetop;
  animation-duration: 0.4s;
  /*
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animatetop;
  animation-duration: 0.4s */
}
.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
  display: flex;
  flex-direction: row;
  height: 50px;
}

.close {
  margin-left: auto;
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
