<template>
  <div class=linkedin>
    <span v-if=!connected>Vous devez vous connecter à LinkedIn avant de pouvoir créer des contacts:</span>
    <button v-if=!connected v-on:click=login>Connectez vous à LinkedIn</button>
    <img class=avatar v-if=connected v-bind:src=me.pictureUrl>
    <span v-if=connected><b>{{me.firstName}}</b> vous êtes connecté à LinkedIn</span>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      connected: function () {
        return this.IN && this.me
      }
    },
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
        },
        me: function (state) {
          return state.me
        }
      },
      actions: {
        login: function (store) {
          IN.User.authorize(function () {
            IN.API
              .Raw('/people/~:(id,first-name,last-name,positions,interests,publications,patents,languages,skills,date-of-birth,email-address,phone-numbers,im-accounts,main-address,twitter-accounts,headline,picture-url,public-profile-url)')
              .result(function (data) {
                store.dispatch('setMe', data)
              })
          })
        }
      }
    }
  }
</script>
<style>
  .linkedin {
    display: flex;
    flex-direction: column;
  }
</style>
