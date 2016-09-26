<template>
  <div class=salesforce>
    <h2>Salesforce</h2>
    <div v-if=connected>
      <img class=avatar v-bind:src=res.photo.smallPhotoUrl>
      <p><b>{{res.firstName}}</b></p>
      <p>Vous êtes connecté à Saleforce</p>
    </div>
    <div v-else>
      <span>Bien évidement vous devez aussi vous connecter à Salesforce:</span>
      <button v-on:click=login>Connectez vous à Salesforce</button>
    </div>
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
