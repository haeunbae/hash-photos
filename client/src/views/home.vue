<template>
  <div>
    <Header />
    <div class="image-container"></div>

    <!-- <button @click="open">test</button> -->
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
  width: 100%;
  min-height: calc(100vh - 54px);
  /* max-width: 800px;
  height: 100%; */
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  /* margin: 0; */
}
</style>
