<template>
  <div class="site-subscription">
    <div class="site-subscription__title">Subscribe</div>
    <div class="site-subscription__description">
      To get special offers and VIP treatment:
    </div>
    <div class="site-subscription__input mt-4">
      <v-text-field
        placeholder="Enter e-mail"
        outlined
        background-color="white"
      ></v-text-field>
    </div>
    <v-hover v-slot="{ hover }">
      <v-btn
        class="site-subscription__button white--text"
        :style="{
          backgroundColor: hover ? 'gray' : 'red',
        }"
        >Subscribe</v-btn
      ></v-hover
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "siteSubscription",
});
</script>
<style scoped lang="scss">
.site-subscription {
  background-color: black;
  color: white;
  padding: 0.01em 16px;
  padding-top: 32px;
  padding-bottom: 32px;

  &__title {
    font-size: 36px;
  }
  &__description {
    font-size: 15px;
  }
  &__button {
    border-radius: 0%;
  }
}
</style>
