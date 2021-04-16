<template>
  <div>
    <Header />
    <main class="grid-container"></main>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
}
</style>
