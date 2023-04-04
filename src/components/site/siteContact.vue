<template>
  <div class="site-contact">
    <div class="site-contact__contact-column">
      <div class="site-contact__contact-column__row--title">Contact</div>
      <div class="site-contact__contact-column__row--description mb-2">
        Questions? Go ahead.
      </div>
      <v-form validate-on="submit" @submit.prevent>
        <div class="site-contact__contact-column__row">
          <v-text-field
            class="site-contact__contact-column__row__input"
            placeholder="Name"
            background-color="white"
            outlined
            dense
            :rules="[(v) => !!v || 'Name is required']"
          ></v-text-field>
        </div>
        <div class="site-contact__contact-column__row">
          <v-text-field
            class="site-contact__contact-column__row__input"
            placeholder="Email"
            type="email"
            background-color="white"
            outlined
            dense
            :rules="[(v) => !!v || 'Email is required']"
          ></v-text-field>
        </div>
        <div class="site-contact__contact-column__row">
          <v-text-field
            class="site-contact__contact-column__row__input"
            placeholder="Subject"
            background-color="white"
            outlined
            dense
            :rules="[(v) => !!v || 'Subject is required']"
          ></v-text-field>
        </div>
        <div class="site-contact__contact-column__row">
          <v-text-field
            class="site-contact__contact-column__row__input"
            placeholder="Message"
            background-color="white"
            outlined
            dense
            :rules="[(v) => !!v || 'Message is required']"
          ></v-text-field>
        </div>
        <div class="site-contact__contact-column__row">
          <v-btn type="submit" block class="mt-2 black white--text"
            >Submit</v-btn
          >
        </div>
      </v-form>
    </div>
    <div class="site-contact__about-column">
      <div class="site-contact__about-column__row--title">About</div>
      <div class="site-contact__about-column__row">About us</div>
      <div class="site-contact__about-column__row">We're hiring</div>
      <div class="site-contact__about-column__row">Support</div>
      <div class="site-contact__about-column__row">Find store</div>
      <div class="site-contact__about-column__row">Shipment</div>
      <div class="site-contact__about-column__row">Payment</div>
      <div class="site-contact__about-column__row">Gift card</div>
      <div class="site-contact__about-column__row">Return</div>
      <div class="site-contact__about-column__row">Help</div>
    </div>
    <div class="site-contact__store-column">
      <div class="site-contact__store-column__row--title">Store</div>
      <div class="site-contact__store-column__row">
        <v-icon color="black" small>mdi-map-marker</v-icon>
        Company name
      </div>
      <div class="site-contact__store-column__row">
        <v-icon color="black" small>mdi-phone</v-icon>
        0044123123
      </div>
      <div class="site-contact__store-column__row">
        <v-icon color="black" small>mdi-email</v-icon>
        ex@gmail.com
      </div>
      <div class="site-contact__store-column__row--title mt-3">We accept</div>
      <div class="site-contact__store-column__row">
        <v-icon color="black" small>mdi-card-bulleted</v-icon>
        Amex
      </div>
      <div class="site-contact__store-column__row">
        <v-icon color="black" small>mdi-credit-card</v-icon>Credit card
      </div>
      <div class="site-contact__store-column__row mt-5">
        <v-icon color="black">mdi-facebook</v-icon>
        <v-icon color="black">mdi-instagram</v-icon>
        <v-icon color="black">mdi-snapchat</v-icon>
        <v-icon color="black">mdi-pinterest</v-icon>
        <v-icon color="black">mdi-twitter</v-icon>
        <v-icon color="black">mdi-linkedin</v-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "siteContact",
  data: () => ({
    name: "",
    email: "",
    subject: "",
    message: "",
  }),
});
</script>
<style scoped lang="scss">
.site-contact {
  display: flex;
  flex-direction: row;
  background-color: rgb(241, 241, 241);
  justify-content: space-between;
  text-align: center;
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;

  &__contact-column {
    display: flex;
    flex-direction: column;
    width: 33%;

    &__row {
      &--title {
        font-weight: 400;
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.5;
      }
      button {
        border-radius: 0;
      }
    }
  }

  &__about-column {
    display: flex;
    flex-direction: column;
    width: 33%;

    &__row {
      text-decoration: underline;
      &--title {
        font-weight: 400;
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.5;
      }
    }
  }

  &__store-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 33%;

    &__row {
      text-align: start;
      &--title {
        text-align: start;
        font-weight: 400;
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.5;
      }
    }
  }
}
</style>
