<template>
  <v-form ref="form" v-model="isFormValid">
    <div class="user-data">
      <div class="user-data__user-details">
        <v-text-field v-model="firstname" label="First name" dense outlined :rules="firstnameRules"
          @change="updateUserDetails()"></v-text-field>
        <v-text-field v-model="surname" outlined label="Surname" :rules="surnameRules" dense
          @change="updateUserDetails()"></v-text-field>
        <v-text-field type="number" v-model="phoneNumber" outlined :rules="phoneNumberRules" dense label="Phone number"
          class="user-data__user-details__phone" @input="updateUserDetails()"></v-text-field>
        <v-text-field type="email" v-model="email" outlined :rules="emailRules" dense label="Email"
          class="user-data__user-details__email" @input="updateUserDetails()"></v-text-field>
      </div>
      <div class="user-data__user-address">
        <v-text-field v-model="country" outlined dense label="Country" :rules="countryRules"
          @change="updateUserDetails()"></v-text-field>
        <v-text-field v-model="street" outlined dense label="Street " :rules="streetRules"
          @change="updateUserDetails()"></v-text-field>
        <div class="user-address__zipCode-town">
          <v-text-field v-model="zipCode" type="number" outlined dense label="Zip Code" :rules="zipCodeRules"
            @change="updateUserDetails()"></v-text-field>
          <v-text-field v-model="town" outlined dense label="Town" :rules="townRules"
            @change="updateUserDetails()"></v-text-field>
        </div>
      </div>
      <div class="user-data__user-type">
        <v-container class="px-0" fluid>
          <div class="user-data__user-type__switch">
            <v-switch v-model="isUserACompany" label="Are you a company?"></v-switch>
          </div>
          <div v-show="isUserACompany" class="user-address__user-type__inputs">
            <v-text-field v-model="companyName" outlined dense label="Company name"
              :rules="isUserACompany ? companyNameRules : []" @change="updateUserDetails()"></v-text-field>
            <v-text-field v-model="companyNip" type="number" outlined dense label="NIP"
              :rules="isUserACompany ? [isNipCorrect] : []" @change="updateUserDetails()"></v-text-field>
          </div>
        </v-container>
      </div>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "userDataForm",
  data: () => ({
    isFormValid: false,
    isUserACompany: false,
    companyName: "",
    companyNameRules: [
      v => !!v || 'Company name is required',
    ],
    companyNip: 0,
    firstname: "",
    firstnameRules: [
      v => !!v || 'First name is required',
    ],
    surname: "",
    surnameRules: [
      v => !!v || 'Surname is required',
    ],
    phoneNumber: 0,
    phoneNumberRules: [
      v => !!v || 'Phone is required',
      v => (v && v.length === 9) || '9 characters long',
    ],
    email: "",
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    country: "",
    countryRules: [
      v => !!v || 'Country is required',
    ],
    street: "",
    streetRules: [
      v => !!v || 'Street is required',
    ],
    zipCode: "",
    zipCodeRules: [
      v => !!v || 'zipCode is required',
      v => (v && v.length === 5) || '5 characters long',
    ],
    town: "",
    townRules: [
      v => !!v || 'Town is required',
    ],
  }),
  watch: {
    isFormValid(value) {
      this.$emit('updateValidation', value)
    },
  },
  methods: {
    updateUserDetails() {
      this.$emit("userData", {
        firstname: this.firstname,
        surname: this.surname,
        phoneNumber: this.phoneNumber,
        country: this.country,
        street: this.street,
        email: this.email,
        zipCode: this.zipCode,
        town: this.town,
        companyName: this.companyName,
        companyNip: this.companyNip
      });
    },
    isNipCorrect(nip) {
      // 6120143320 - Sample NIP
      let sum = 0;
      console.log(this.$refs.form)
      if (nip.length == 10 && nip != 0 && nip != undefined) {
        let weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
        for (let i = 0; i < 9; i++) { sum += nip.charAt(i) * weights[i] }
        if ((sum % 11) % 10 == nip.charAt(9)) {
          return true;
        }
      }
      return 'Nip uncorrect'
    },
  },
  computed: {
    ...mapGetters(["getStateUserData"]),
  },
  mounted() {
    this.firstname = this.getStateUserData.firstname
    this.surname = this.getStateUserData.surname
    this.phoneNumber = this.getStateUserData.phoneNumber
    this.country = this.getStateUserData.country
    this.street = this.getStateUserData.street
    this.email = this.getStateUserData.email
    this.zipCode = this.getStateUserData.zipCode
    this.town = this.getStateUserData.town
    this.companyName = this.getStateUserData.companyName
    this.companyNip = this.getStateUserData.companyNip
  }
});
</script>
<style scoped lang="scss">
.user-data {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  &__user-type {
    padding: 10px;

    &__switch {

      &::v-deep {
        .v-input__slot {
          background-color: transparent !important;
        }
      }
    }
  }

  &__user-details {
    &__phone {
      max-width: 150px;
    }
  }

  &__user-address {
    &__zipCode-town {
      display: flex;
      justify-content: flex-start;

      div {
        margin-right: 15px;
        max-width: 120px;
      }
    }
  }
}

@media(max-width: 960px) {
  .user-data {
    display: flex;
    flex-direction: column;
  }
}
</style>
