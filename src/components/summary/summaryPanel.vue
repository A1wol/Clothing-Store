<template>
  <div class="panel">
    <div class="panel__button">
      <v-btn color="primary" class="mb-4" outlined width="200px" @click="$router.push('/shopping-cart')">
        <div><v-icon>mdi-arrow-left</v-icon></div>
        SHOPPING CART
      </v-btn>
    </div>
    <div class="text-h5">Summary</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "summaryPanel",
  methods: {},
  computed: {
    ...mapGetters(["getItemsInCart"]),
  },
});
</script>
<style scoped lang="scss">
.summary {
  padding: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  &__delivery-price {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }

  &__price {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }

  &__total {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }

  &__actions {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
}
</style>
