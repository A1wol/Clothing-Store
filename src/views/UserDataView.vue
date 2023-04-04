<template>
  <div class="user-data">
    <div><v-btn outlined color="primary" @click="$router.push('/summary')"><v-icon>mdi-arrow-left</v-icon> BACK</v-btn>
    </div>
    <div class="text-h5 pa-3">Enter your details</div>
    <div class="user-data__forms">
      <UserDataForm @userData="getUserData" @updateValidation="isFormValidated = $event" />
    </div>
    <div class="user-data__summary">
      <div class="text-center">
        <v-dialog v-model="dialog" max-width="700px">
          <template v-slot:activator="{ on, attrs }">
            <div class="user-data__summary__buttons "><v-btn :disabled="!isFormValidated" class="white--text"
                color="black" width="200px" v-bind="attrs" v-on="on" @click="acceptUserData()">Accept</v-btn>
            </div>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              <div class="text-h5 pa-3">Your profile card</div>
            </v-card-title>
            <UserDataSummary :userData="userData" />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false, $router.push('/delivery')">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UserDataForm from "@/components/userData/userDataForm.vue";
import UserDataSummary from "@/components/userData/userDataSummary.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "DeliveryView",
  data: () => ({
    userData: {
      firstname: "",
      surname: "",
      phoneNumber: 0,
      country: "",
      street: "",
      zipCode: "",
      town: "",
      companyNip: 0,
      companyName: ''
    },
    isFormValidated: false,
    dialog: false,
  }),
  methods: {
    getUserData(value: { firstname: string; surname: string; phoneNumber: number; country: string, street: string; zipCode: string; town: string }) {
      this.userData = value;
    },
    acceptUserData() {
      if (this.userData.firstname === '') { this.userData = this.getStateUserData }
      this.$store.commit('setUserData', this.userData)
    }
  },
  computed: {
    ...mapGetters(["getStateUserData"]),
  },
  components: { UserDataForm, UserDataSummary },
});
</script>
<style scoped lang="scss">
.user-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;

  &__forms {
    background-color: rgb(245, 245, 245);
    border: 1px solid black;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 15px;
    min-height: 350px;
    justify-content: space-between;

    div {
      width: 300px;
    }

    &::v-deep {
      .v-input__slot {
        background-color: white;
      }

    }
  }

  &__summary {
    display: flex;

    &__buttons {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}

@media (max-width: 960px) {
  .user-data {
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
