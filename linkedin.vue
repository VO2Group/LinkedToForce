<template>
  <div class=linkedin v-if=!IN>
    <a href=# v-on:click.prevent=login>LinkedIn</a>
  </div>
</template>
<script>
  module.exports = {
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
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
