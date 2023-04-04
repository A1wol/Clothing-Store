<template>
  <v-app>
    <v-app-bar class="app-bar" dark flat app height="84px">
      <v-toolbar-title class="app-bar__title" @click="$router.push('/')">LOGO</v-toolbar-title>
      <v-app-bar-nav-icon @click="isDrawerOpened = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app class="nav-bar" height="100%" v-model="isDrawerOpened"
      :permanent="$vuetify.breakpoint.mdAndUp" :absolute="!$vuetify.breakpoint.mdAndUp">
      <div class="nav-bar__cross">
        <v-icon color="black" small @click="isDrawerOpened = false">mdi-close</v-icon>
      </div>
      <div class="nav-bar__logo">LOGO</div>
      <div class="nav-bar__category-list">
        <div class="nav-bar__category-list__group__item" @click="navigateToHomeSite">
          <div>Shirts</div>
        </div>

        <div class="nav-bar__category-list__group__item" @click="navigateToHomeSite">
          <div>Dresses</div>
        </div>
        <div class="nav-bar__category-list__group__subgroup__header"
          @click="isDrawerSubgroupOpened = !isDrawerSubgroupOpened">
          <div>Jeans <v-icon color="black">mdi-menu-down</v-icon></div>
        </div>
        <div v-if="isDrawerSubgroupOpened" class="nav-bar__category-list__group__subgroup">
          <div class="nav-bar__category-list__group__subgroup__item--active" @click="navigateToHomeSite">
            <div>
              <v-icon color="black" small>mdi-menu-right</v-icon> Skinny
            </div>
          </div>
          <div class="nav-bar__category-list__group__subgroup__item" @click="navigateToHomeSite">
            <div>Released</div>
          </div>
          <div class="nav-bar__category-list__group__subgroup__item" @click="navigateToHomeSite">
            <div>Bootcut</div>
          </div>
          <div class="nav-bar__category-list__group__subgroup__item" @click="navigateToHomeSite">
            <div>Straight</div>
          </div>
        </div>
        <div class="nav-bar__category-list__group__item" @click="navigateToHomeSite">
          <div>Jackets</div>
        </div>
        <div class="nav-bar__category-list__group__item" @click="navigateToHomeSite">
          <div>Gymwear</div>
        </div>
        <div class="nav-bar__category-list__group__item" @click="navigateToHomeSite">
          <div>Blazers</div>
        </div>
        <div class="nav-bar__category-list__group__item" @click="navigateToHomeSite">
          <div>Shoes</div>
        </div>
      </div>
      <div class="nav-bar__contact-list">
        <div class="nav-bar__contact-list__item">Contact</div>
        <div class="nav-bar__contact-list__item">
          <div @click="dialog = true">Newsletter</div>
          <newsletterModal :dialog.sync="dialog" />
        </div>
        <div class="nav-bar__contact-list__item">Subscribe</div>
      </div>
    </v-navigation-drawer>
    <v-main class="main-container pt-0">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import newsletterModal from "@/components/site/newsletterModal.vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    isDrawerOpened: true,
    isDrawerSubgroupOpened: false,
    dialog: false,
  }),
  methods: {
    navigateToHomeSite() {
      this.$router.push('/')
    }
  },
  components: {
    newsletterModal,
  },
});
</script>
<style lang="scss" scoped>
@import "./assets/variables";

#app {
  font-family: "Montserrat", sans-serif;
  max-width: 1200px;

  .app-bar {
    display: none;
  }

  .nav-bar {
    line-height: 1.5;
    font-size: 18px;
    display: fixed;
    width: 250px;
    cursor: pointer;
    height: 100%;

    &__logo {
      font-size: 24px;
      font-weight: 400;
      margin-top: 30px;
      margin-bottom: 16px;
      margin-left: 20px;
      letter-spacing: 4px;
    }

    &__cross {
      display: none;
    }

    &__category-list {
      padding-top: 64px;
      padding-bottom: 64px;

      &__group {
        margin-top: 64px;
        margin-bottom: 64px;

        &__item {
          padding-left: 20px;
          line-height: 2;
          height: 30px;
          color: gray;

          &:hover {
            background-color: $background-grey;
            color: black;
          }
        }

        &__subgroup {
          &__header {
            line-height: 2;
            padding-left: 20px;

            &:hover {
              background-color: $background-grey;
            }
          }

          &__item {
            margin-right: 20px;
            line-height: 2;
            margin-left: 30px;
            padding-left: 10px;
            color: gray;

            &:hover {
              background-color: $background-grey;
              color: black;
            }

            &--active {
              margin-right: 20px;
              margin-left: 30px;
              padding-left: 10px;
              background-color: #cccccc;
              line-height: 2;

              &:hover {
                background-color: $background-grey;
              }
            }
          }
        }
      }
    }

    &__contact-list {
      div {
        margin: 0;
      }

      &__item {
        line-height: 2;
        padding-left: 20px;
        font-size: 15px;

        &:hover {
          background-color: $background-grey;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  #app {
    font-family: "Montserrat", sans-serif;

    .main-container {
      margin-top: 90px;
      display: flex;
      justify-content: center;
    }

    .app-bar {
      display: flex;
      justify-content: flex-end;
      position: fixed;
      z-index: 1;

      &__title {
        font-size: 24px;
        justify-content: flex-start;
        display: flex;
        letter-spacing: 4px;
        cursor: pointer;
      }

      &::v-deep .v-toolbar__content {
        width: 100%;
        justify-content: space-between;
        font-size: 24px;
        padding-top: 24px;
        padding-bottom: 13px;
        margin-bottom: 20px;
        line-height: 2;
      }
    }

    .nav-bar {
      position: fixed;
      height: 100%;
      overflow-y: scroll;
      z-index: 99;

      &__cross {
        display: flex;
        position: absolute;
        right: 5px;
        top: 5px;
      }
    }
  }
}
</style>
