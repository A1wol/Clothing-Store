<template>
  <div class="data-table">
    <v-card class="data-table__table">
      <v-data-table :items="getUniqueItems()" :headers="tableHeaders" :items-per-page="5"><template v-slot:body.append>
          <div class="text-h6 font-weight-bold ml-4">
            Total: {{ getTotalAmountToBePaid() }}$
          </div>
        </template>
        <template v-slot:item.quantity="{ item }">
          {{ getQuantityOfItem(item.id) }} </template><template v-slot:item.image="{ item }">
          <v-img class="data-table__table__image" :src="item.image"></v-img>
        </template>
      </v-data-table>
    </v-card>
    <div class="data-table__button">
      <v-btn color="black" class="mb-4" outlined width="200px" @click="$router.push('/user-data')">
        USER DATA
        <div><v-icon>mdi-arrow-right</v-icon></div>
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "summaryTable",
  data: () => ({
    tableHeaders: [
      {
        text: "Name",
        value: "product_name",
      },
      {
        text: "Quantity",
        value: "quantity",
        align: "center",
        sortable: false
      },
      {
        text: "Price",
        value: "price",
        sortable: false
      },
      {
        text: "Image",
        value: "image",
        sortable: false
      },
    ],
  }),
  methods: {
    getTotalAmountToBePaid() {
      const sum = this.getItemsInCart.reduce(
        (
          accumulator: any,
          object: {
            price: string;
          }
        ) => {
          return accumulator + parseInt(object.price.slice(1));
        },
        0
      );
      return sum;
    },
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
    ...mapGetters(["getItemsInCart"]),
  },
});
</script>
<style scoped lang="scss">
.data-table {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__table {
    &__image {
      width: 50px;
      height: 70px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  &__button {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
