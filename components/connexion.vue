<template>
  <div class=connection v-if=connected>
    <img v-if=me v-bind:src=me.pictureUrl>
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
        me: function (state) {
          return state.me
        },
        conn: function (state) {
          return state.conn
        },
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
