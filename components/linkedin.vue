<template>
  <div class=linkedin>
    <h2>LinkedIn</h2>
    <div v-if=connected>
      <img class=avatar v-bind:src=me.pictureUrl>
      <p><b>{{me.firstName}}</b></p>
      <p>Vous êtes connecté à LinkedIn</p>
    </div>
    <div v-else>
      <span>Vous devez vous connecter à LinkedIn avant de pouvoir créer des contacts:</span>
      <button v-on:click=login>Connectez vous à LinkedIn</button>
    </div>
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
