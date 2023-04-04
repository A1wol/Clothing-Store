<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="850px">
      <v-card>
        <v-card-title class="headline d-flex justify-center">
          <div class="headline__title">NEWSLETTER</div>
          <v-icon class="headline__cross" color="black" large @click="close">mdi-close</v-icon>
        </v-card-title>
        <v-card-text class="text-center">Join our mailing list to receive updates on new arrivals and special
          offers.</v-card-text>
        <div class="modal__input ml-5 mr-5">
          <v-text-field outlined placeholder="Enter e-mail" type="email"></v-text-field>
        </div>
        <v-card-actions class="d-flex justify-center align-items-center"><v-hover v-slot="{ hover }">
            <v-btn class="mb-6 white--text action-button" :style="{
              backgroundColor: hover ? 'gray' : 'red',
            }" @click="close">Close</v-btn></v-hover>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: {
    dialog: {
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("update:dialog", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.action-button {
  border-radius: 0%;
  width: 125px;
  height: 50px;
}

.headline {
  letter-spacing: 4px;
  margin: 0;

  &__cross {
    position: absolute;
    right: 20px;
  }
}
</style>
