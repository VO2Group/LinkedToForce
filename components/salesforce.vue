<template>
  <div class=salesforce>
    <p v-if=!connected>Bien évidement vous devez aussi vous connecter à Salesforce:</p>
    <button v-if=!connected v-on:click=login>Connectez vous à Salesforce</button>
    <img class=avatar v-if=connected v-bind:src=res.photo.smallPhotoUrl>
    <p v-if=connected><b>{{res.firstName}}</b></p>
    <p v-if=connected>Vous êtes connecté à Saleforce</p>
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
