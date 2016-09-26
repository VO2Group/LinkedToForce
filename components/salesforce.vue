<template>
  <div class=salesforce>
    <h2>Salesforce</h2>
    <div v-if=connected>
      <img class=avatar v-bind:src=meSF.photo.smallPhotoUrl>
      <p><b>{{name}}</b></p>
      <p>Vous êtes connecté à Saleforce</p>
    </div>
    <div v-else>
      <label>Bien évidement vous devez aussi vous connecter à Salesforce</label>
      <button v-on:click=login>Connectez vous à Salesforce</button>
    </div>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      name: function () {
        return this.meSF.firstName + ' ' + this.meSF.lastName
      },
      connected: function () {
        return this.SF && this.meSF
      }
    },
    vuex: {
      getters: {
        SF: function (state) {
          return state.SF
        },
        meSF: function (state) {
          return state.meSF
        }
      }
    },
    methods: {
      login: function () {
        jsforce.browser.login()
      }
    }
  }
</script>
