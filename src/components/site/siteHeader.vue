<template>
  <div class="site-header">
    <div class="site-header__title">Jeans</div>
    <div class="site-header__right-side">
      <div class="site-header__right-side__shopping-cart mr-6">
        <v-menu location="start">
          <template v-slot:activator="{ on, attrs }">
            <v-badge :content="amountOfItemsInCart" color="error">
              <v-icon color="black" v-bind="attrs" v-on="on">mdi-cart</v-icon>
            </v-badge>
          </template>

          <v-card class="pa-5" min-width="300px">
            <v-list>
              <v-list-item-title class="text-h5 d-flex justify-center mb-5"
                >Shopping cart
                <v-btn
                  :disabled="getItemsInCart.length === 0"
                  outlined
                  class="ml-5"
                  @click="$store.commit('resetItemsInCart')"
                  >CLEAR</v-btn
                >
                <v-btn
                  @click="$router.push('/shopping-cart')"
                  outlined
                  color="blue"
                  class="ml-2"
                  >CART</v-btn
                >
              </v-list-item-title>
              <v-list-item
                v-for="(item, i) in getUniqueItems()"
                :key="i"
                active-color="primary"
                rounded="shaped"
                @click="$router.push(`item-card/${item.id}`)"
              >
                <div class="mr-5">
                  <v-img :src="item.image" width="30px"></v-img>
                </div>
                <v-list-item-title
                  v-text="item.product_name"
                  class="font-weight-bold"
                ></v-list-item-title>
                <div class="ml-5">{{ item.price }}</div>
                <div class="ml-5">x{{ getQuantityOfItem(item.id) }}</div>
              </v-list-item>
              <div class="text-h5 justify-end d-flex mt-2 mr-4">
                Total: {{ getTotalAmountToBePaid() }}$
              </div>
            </v-list>
          </v-card>
        </v-menu>
      </div>
      <div class="site-header__right-side__search-icon">
        <v-icon color="black">mdi-magnify</v-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "siteHeader",
  data: () => ({}),
  methods: {
    getQuantityOfItem(itemID: string) {
      return this.getItemsInCart.filter(
        (el: { id: string }) => el.id === itemID
      ).length;
    },
    getUniqueItems() {
      return [...new Set(this.getItemsInCart)];
    },
    getTotalAmountToBePaid() {
      const sum = this.getItemsInCart.reduce(
        (accumulator: any, object: { price: string }) => {
          return accumulator + parseInt(object.price.slice(1));
        },
        0
      );
      return sum;
    },
  },
  computed: {
    amountOfItemsInCart() {
      return this.$store.state.itemsInCart.length;
    },
    ...mapGetters(["getItemsInCart"]),
  },
  mounted() {},
});
</script>
<style scoped lang="scss">
.site-header {
  display: flex;
  justify-content: space-between;

  &__title {
    font-size: 24px;
    display: flex;
    align-items: center;
  }

  &__right-side {
    display: flex;
    align-items: center;

    &__shopping-cart {
    }
  }
}
</style>
