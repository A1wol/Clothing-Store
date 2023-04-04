<template>
    <div class="delivery-view">
        <div><v-btn outlined color="primary" @click="$router.push('/user-data')"><v-icon>mdi-arrow-left</v-icon>
                BACK</v-btn>
        </div>
        <div class="delivery-view__delivery">
            <DeliveryDetails />
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from "vue";
import DeliveryDetails from "@/components/delivery/deliveryDetails.vue"

export default Vue.extend({
    name: "DeliveryView",
    data: () => ({
    }),
    methods: {
    },
    components: { DeliveryDetails },
});
</script>
<style scoped lang="scss">
.delivery-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;

    &__forms {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: rgb(245, 245, 245);
        border: 1px solid black;
        padding-top: 50px;
        padding-bottom: 50px;
        border-radius: 15px;
        min-height: 350px;
    }
}

@media (max-width: 960px) {
    .delivery-view {
        padding: 20px;

        &__forms {
            display: flex;
            flex-direction: column;
            padding: 20px;
            justify-content: center;
        }
    }
}
</style>
  