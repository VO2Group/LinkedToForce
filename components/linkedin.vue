<template>
  <div class=linkedin>
    <h2>LinkedIn</h2>
    <div v-if=connected>
      <img class=avatar v-bind:src=meIN.pictureUrl>
      <p><b>{{name}}</b></p>
      <p>Vous êtes connecté à LinkedIn</p>
    </div>
    <div v-else>
      <label>Vous devez vous connecter à LinkedIn avant de pouvoir créer des contacts</label>
      <button v-on:click=login>Connectez vous à LinkedIn</button>
    </div>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      name: function () {
        return this.meIN.firstName + ' ' + this.meIN.lastName
      },
      connected: function () {
        return this.IN && this.meIN
      }
    },
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
        },
        meIN: function (state) {
          return state.meIN
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
