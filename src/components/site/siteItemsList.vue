<template>
  <div class="site-items-list">
    <div class="site-items-list__counter mt-5 text-h6">
      {{ itemList.length }} items
    </div>
    <v-list class="site-items-list__offers">
      <v-list-item v-for="item in itemList" class="site-items-list__offers__item" :key="item.id" three-line width="100px"
        :prepend-avatar="item.image" @click="$router.push(`item-card/${item.id}`)">
        <v-list-item-content class=" site-items-list__offers__item__content" width="100px">
          <v-hover v-slot="{ hover }">
            <v-img :src="item.image" class="site-items-list__offers__item__content__image">
              <div class="d-flex justify-center">
                <v-btn v-if="hover" class="site-items-list__offers__item__content__image__button black white--text"
                  @click.stop="buyItem(item)">
                  TO CART
                  <v-icon small class="ml-1">mdi-cart</v-icon></v-btn>
              </div>
            </v-img></v-hover>
          <v-list-item-title> {{ item.product_name }} </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.price }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Axios from "axios";

export default Vue.extend({
  name: "siteItemsList",
  data: () => ({
    itemList: [],
  }),
  methods: {
    async getItemList() {
      await Axios.get("http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6").then(
        (response) => {
          this.itemList = response.data;
        }
      );
    },
    buyItem(item: object) {
      this.$store.commit("addItemToCart", item);
      console.log(this.$store.state.itemsInCart);
    },
  },
  mounted() {
    this.getItemList();
  },
});
</script>
<style scoped lang="scss">
.site-items-list {
  &__offers {
    display: flex;
    flex-wrap: wrap;

    &__item {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      width: 200px;

      &__content {
        flex: 1;
        display: flex;

        &__image {
          display: flex;
          align-items: center;

          &__button {
            border-radius: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .site-items-list {
    &__offers {
      &__item {
        width: 150px;
      }
    }
  }
}
</style>
