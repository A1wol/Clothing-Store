<template>
    <div class="item-cart-view">
        <div class="item-cart-view__left-side">
            <div class="item-cart-view__left-side__image">
                <v-img :src="itemImageSrc"></v-img>
            </div>
        </div>
        <div class="item-cart-view__right-side">
            <div class="item-cart-view__right-side__product-name">
                <div class="text-h5">Product name: </div>
                <div class="text-h6">
                    {{ itemProductName }}
                </div>
            </div>
            <div class="item-cart-view__right-side__price">
                <div class="text-h5">Product price:</div>
                <div class="text-h6">{{ itemPrice }}</div>
            </div>

            <v-expansion-panels class="mt-5 item-cart-view__right-side__description" mandatory>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Short description
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ itemShortDescription }}
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Description
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ itemDescription }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <div class="mt-5">Company: {{ itemCompany }}</div>

            <div class="item-cart-view__right-side__button">
                <v-btn class="black white--text" @click="$store.commit('addItemToCart', item)">BUY NOW</v-btn>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import Axios from "axios";
import Vue from "vue";

export default Vue.extend({
    name: "ItemCartView",
    data: () => ({
        itemProductName: '',
        itemImageSrc: '',
        itemShortDescription: '',
        itemDescription: '',
        itemPrice: '',
        itemCompany: '',
        itemProductId: '',
        item: {},
    }),
    methods: {
        async getItemDetails() {
            await Axios.get("https://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6").then((response) => {
                let item = response.data.find(
                    (el: any) =>
                        el.id == this.$route.params.id
                )
                this.itemProductName = item.product_name
                this.itemImageSrc = item.image
                this.itemShortDescription = item.short_description
                this.itemPrice = item.price
                this.itemCompany = item.company
                this.itemDescription = item.description
                this.itemProductId = item.id
                this.item = item
            })
        }
    },
    created() {
        this.getItemDetails()
    }
});
</script>
<style scoped lang="scss">
.item-cart-view {
    display: flex;
    padding: 50px;
    flex-direction: row;

    &__left-side {
        display: flex;
        justify-content: center;
        margin-right: 40px;

        &__image {
            display: flex;
            margin-bottom: 30px;
            width: 100%;
            max-height: 400px;
        }
    }

    &__right-side {
        &__button {
            margin-top: 30px;

            button {
                width: 100%;
            }
        }

        &__description {}
    }
}

@media (max-width: 960px) {
    .item-cart-view {
        flex-direction: column;

        &__left-side {
            margin-right: 0px;

            &__image {
                max-width: 500px;
                max-height: 400px;
            }
        }

        &__right-side {
            &__button {
                margin-top: 30px;

                button {
                    width: 200px;
                }
            }
        }
    }
}
</style>
  