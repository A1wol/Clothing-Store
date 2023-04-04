<template>
  <div class="shopping-cart-view">
    <CartPanel />
    <div class="text-h5">Shopping cart</div>
    <CartList />
    <div class="d-flex justify-end">
      <v-btn class="shopping-cart-view__button" outlined @click="$router.push('/summary')">
        <div class="text-h6">Summary</div>
        <v-icon class="ml-3">mdi-page-next-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import CartList from "@/components/cart/cartList.vue";
import CartPanel from "@/components/cart/cartPanel.vue";
import Vue from "vue";

export default Vue.extend({
  name: "ShoppingCartView",
  components: { CartList, CartPanel },
});
</script>
<style scoped lang="scss">
.shopping-cart-view {
  display: flex;
  padding: 50px;
  flex-direction: column;
  min-width: 600px;

  &__button {
    max-width: 200px;
    border-radius: 0px;
  }
}

@media (max-width: 960px) {
  .shopping-cart-view {
    padding: 20px;
  }
}
</style>
