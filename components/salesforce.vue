<template>
  <div class=salesforce>
    <span v-if=!connected>Bien évidement vous devez aussi vous connecter à Salesforce:</span>
    <button v-if=!connected v-on:click=login>Connectez vous à Salesforce</button>
    <img class=avatar v-if=connected v-bind:src=res.photo.smallPhotoUrl>
    <span v-if=connected><b>{{res.firstName}}</b> vous êtes connecté à Saleforce</span>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      connected: function () {
        return this.conn && this.res
      }
    },
    vuex: {
      getters: {
        conn: function (state) {
          return state.conn
        },
        res: function (state) {
          return state.res
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
<style>
  .salesforce {
    display: flex;
    flex-direction: column;
  }
</style>
