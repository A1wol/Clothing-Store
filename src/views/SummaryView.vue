<template>
  <div class="summary-view">
    <summaryPanel />
    <summaryTable />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import summaryPanel from "@/components/summary/summaryPanel.vue";
import summaryTable from "@/components/summary/summaryTable.vue";

export default Vue.extend({
  name: "SummaryView",
  components: { summaryPanel, summaryTable },
});
</script>
<style scoped lang="scss">
.summary-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
}

@media (max-width: 960px) {
  .summary-view {
    padding: 20px;
  }
}
</style>
