<template>
  <div class=connection>
    <button v-if=connected v-on:click=logout>Déconnectez vous</button>
    <span v-if=connected>Vous serez déconnecté de LinkedIn et/ou Salesforce</span>
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
<style>
  .connection {
    display: flex;
    flex-direction: column;
  }
</style>
