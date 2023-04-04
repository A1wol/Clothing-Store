<template>
  <div class="user-summary">
    <div class="user-summary__user-data">
      <div class="user-summary__user-data__avatar">
        <v-avatar color="primary lighten-2" rounded size="65">
          <v-icon color="black" large>mdi-account-outline</v-icon>
        </v-avatar>
      </div>
      <div class="user-summary__user-data__name">
        <div class="font-weight-bold text-h6">{{ $props.userData.firstname }} {{ $props.userData.surname }}</div>

        <div v-if="$props.userData.phoneNumber !== 0" class="user-summary__user-data__name__phone ">
          {{ $props.userData.phoneNumber }}
        </div>
      </div>
    </div>
    <div class="user-summary__user-address">
      <div class="user-summary__user-address__column">
        <div class="user-summary__user-address__column__country">
          Country <div class="text-h5">{{ $props.userData.country }}
          </div>
        </div>
        <div class="user-summary__user-address__column__street">
          Street
          <div class="text-h5">{{ $props.userData.street }}</div>
        </div>
      </div>
      <div class="user-summary__user-address__column">
        <div class="user-summary__user-address__column__zipCode">
          Zip Code
          <div class="text-h5">{{ $props.userData.zipCode }}</div>
        </div>
        <div class="user-summary__user-address__column__town">
          Town
          <div class="text-h5">{{ $props.userData.town }}</div>
        </div>
      </div>

      <div v-if="$props.userData.companyName !== '' && $props.userData.companyNip !== 0"
        class="user-summary__user-address__column">
        <div class="user-summary__user-address__column__company-name">
          Company name
          <div class="text-h5">{{ $props.userData.companyName }}</div>
        </div>
        <div class="user-summary__user-address__column__company-nip">
          Company NIP
          <div class="text-h5">{{ $props.userData.companyNip }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "userDataSummary",
  props: ["userData"],
});
</script>
<style scoped lang="scss">
.user-summary {
  display: flex;
  flex-direction: column;
  min-width: 300px;

  &__user-data {
    display: flex;
    flex-direction: row;
    padding: 30px;

    &__name {
      flex-direction: column;
      padding-left: 20px;

      &__phone {
        color: gray;
      }
    }
  }

  &__user-address {
    display: flex;
    flex-direction: row;
    padding-left: 30px;

    &__column {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;

      div {
        min-height: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

}

@media(max-width: 260px) {
  .user-summary {
    div {
      flex-direction: column;
    }
  }
}
</style>
