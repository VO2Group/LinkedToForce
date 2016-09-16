<template>
  <div v-if=connected>
    <a href=# v-on:click.prevent=logout>Déconnexion</a>
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
        },
      },
      actions: {
        logout: function (store) {
          if (this.IN) {
            this.IN.User.logout()
            store.dispatch('auth', null)
          }

          if (this.conn) {
            jsforce.browser.logout()
            store.dispatch('connect', null)
          }
        }
      }
    }
  }
</script>
