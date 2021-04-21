<template>
  <div>
    <Header />
    <div class="image-container"></div>

    <button @click="open">test</button>
    <modal ref="modal"></modal>
  </div>
</template>

<script>
import header from "./homeHeader";
import modal from "../components/addModal";
export default {
  components: {
    Header: header,
    modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    open() {
      // this.showModal = !this.showModal;
      this.$refs.modal.open();
    },
  },
};
</script>

<style>
.grid-container {
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em; */
  /* flex
  width: 100%;
  height: 100%; */
}
.image-container {
  width: 1000px;
  height: 500px;
  background-color: lightgray;
}
</style>
