<template>
    <div class="site-footer">
        Powered by <div class="site-footer__link ml-2"> w3.css</div>
    </div>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "siteFooter",
});
</script>
<style scoped lang="scss">
.site-footer {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;

    &__link {
        text-decoration: underline;
    }
}
</style>
  