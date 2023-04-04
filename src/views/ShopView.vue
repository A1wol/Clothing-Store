<template>
  <div class="shop-view">
    <div>
      <siteHeader />
    </div>
    <div>
      <SiteAdvert />
    </div>
    <div>
      <SiteItemsList />
    </div>
    <div>
      <SiteSubscription />
    </div>
    <div>
      <SiteContact />
    </div>
    <div>
      <siteFooter />
    </div>
  </div>
</template>

<script lang="ts">
import SiteAdvert from "@/components/site/siteAdvert.vue";
import SiteContact from "@/components/site/siteContact.vue";
import siteHeader from "@/components/site/siteHeader.vue";
import SiteItemsList from "@/components/site/siteItemsList.vue";
import SiteSubscription from "@/components/site/siteSubscription.vue";
import siteFooter from "@/components/site/siteFooter.vue";
import Vue from "vue";

export default Vue.extend({
  name: "ShopView",

  components: {
    siteHeader,
    SiteAdvert,
    SiteItemsList,
    SiteSubscription,
    SiteContact,
    siteFooter,
  },
});
</script>
<style scoped lang="scss">
.shop-view {
  padding: 1em 16px;
}
</style>
