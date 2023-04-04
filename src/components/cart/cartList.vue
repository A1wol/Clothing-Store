<template>
  <v-card class="pa-5 items-list" min-width="550px">
    <div v-if="getUniqueItems().length === 0">
      No items in your cart
      <v-icon color="black"> mdi-emoticon-sad-outline </v-icon>
    </div>
    <v-list class="items-list__list">
      <v-list-item v-for="(item, i) in getUniqueItems()" :key="i" active-color="primary" rounded="shaped"
        class="items-list__list__item" @click="$router.push(`item-card/${item.id}`)">
        <div class="mr-5">
          <v-img :src="item.image" width="30px"></v-img>
        </div>
        <v-list-item-title v-text="item.product_name"
          class="font-weight-bold items-list__list__item__title"></v-list-item-title>

        <div class="items-list__quantity">
          <v-btn color="red" outlined @click.stop="$store.commit('removeItemFromCart', item)">
            <v-icon color="black">mdi-minus</v-icon></v-btn>
          <div class="text-h6 ml-3 mr-3 items-list__quantity__number">
            {{ getQuantityOfItem(item.id) }}
          </div>
          <v-btn color="green" outlined
            @click.stop="$store.commit('addItemToCart', item)"><v-icon>mdi-plus</v-icon></v-btn>
        </div>
        <div class="items-list__list__item__price">{{ item.price }}</div>
        <div class="items-list__trash">
          <v-icon large color="black"
            @click.stop="$store.commit('removeAllSameItems', item)">mdi-trash-can-outline</v-icon>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "cartList",
  methods: {
    getQuantityOfItem(itemID: string) {
      return this.getItemsInCart.filter(
        (el: { id: string }) => el.id === itemID
      ).length;
    },
    getUniqueItems() {
      return [...new Set(this.getItemsInCart)];
    },
  },
  computed: {
    amountOfItemsInCart() {
      return this.$store.state.itemsInCart.length;
    },
    ...mapGetters(["getItemsInCart"]),
  },
});
</script>
<style scoped lang="scss">
.items-list {
  align-items: center;
  width: 100%;
  margin-bottom: 50px;

  &__list {
    &__item {
      justify-content: space-between;

      &__price {
        min-width: 60px;
      }

      &__title {
        max-width: 250px;
        min-width: 140px;
        font-size: 18px;
      }
    }
  }

  &__quantity {
    display: flex;
    align-items: center;
    margin-left: 15px;

    &__number {
      width: 25px;
      justify-content: center;
      display: flex;
    }
  }
}
</style>
