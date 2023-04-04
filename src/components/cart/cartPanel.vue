<template>
    <div class="deleting-panel">
        <v-btn color="primary" class="mb-4" outlined width="200px" @click="$router.push('/')">
            <v-icon class="mr-2"> mdi-arrow-left-bold-circle-outline</v-icon>ITEM
            LIST</v-btn><v-btn color="red" outlined class="mb-4" width="200px"
            @click="$store.commit('resetItemsInCart')">DELETE ALL <v-icon class="ml-2">
                mdi-delete-circle</v-icon></v-btn>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "cartPanel",
});
</script>
<style scoped lang="scss">
.deleting-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
</style>
