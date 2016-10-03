<template>
  <div class=linkedin>
    <div v-if=!connected>
      <button class=button v-on:click=login>Connectez vous à<br>LinkedIn</button>
    </div>
    <div v-else>
      <h2>{{name}}</h2>
    </div>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      name: function () {
        return this.me.firstName + ' ' + this.me.lastName
      },
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
