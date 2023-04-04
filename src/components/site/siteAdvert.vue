<template>
  <div class="site-advert">
    <v-img class="site-advert__image" src="@/assets/jeans.png" alt="jeans"></v-img>
    <div class="site-advert__content">New arrivals</div>
    <div class="site-advert__content">COLLECTION 2016</div>
    <div class="site-advert__content">
      <v-btn class="black white--text text-h6" width="150px" height="50px">SHOP NOW</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "siteAdvert",
});
</script>
<style scoped lang="scss">
.site-advert {
  margin-top: 15px;

  &__content {
    position: absolute;
    left: 5%;
    color: white;

    &:nth-child(2) {
      font-size: 64px;
      font-weight: 400;
      top: 100px;
    }

    &:nth-child(3) {
      font-size: 36px;
      font-weight: 400;
      top: 220px;
    }

    &:nth-child(4) {
      font-size: 36px;
      font-weight: 400;
      top: 320px;
    }
  }
}

@media (max-width: 960px) {
  .site-advert {
    &__content {
      &:nth-child(2) {
        font-size: 36px;
        top: 100px;
      }

      &:nth-child(3) {
        display: none;
      }

      &:nth-child(4) {
        top: 220px;
      }
    }
  }
}
</style>
