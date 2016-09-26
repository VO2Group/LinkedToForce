<template>
  <div class=connection>
    <h2>Etat</h2>
    <div v-if=connected>
      <button v-on:click=logout>Déconnectez vous</button>
      <span>Vous serez déconnecté de LinkedIn et/ou Salesforce</span>
    </div>
    <div v-else>
      <span>Vous êtes déconnecté</span>
    </div>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      connected: function () {
        return this.IN || this.conn
      }
    },
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
        },
        conn: function (state) {
          return state.conn
        }
      },
      actions: {
        logout: function (store) {
          if (this.IN) {
            this.IN.User.logout()
            store.dispatch('setIN', null)
          }
          if (this.conn) {
            jsforce.browser.logout()
            store.dispatch('setConn', null)
          }
        }
      }
    }
  }
</script>
