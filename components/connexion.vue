<template>
  <div class=connection v-if=connected>
    <a href=# v-on:click.prevent=logout>Déconnexion</a>
    <img v-if=me v-bind:src=me.pictureUrl>
    <pre v-if=me>{{ me }}</pre>
    <img v-if=res v-bind:src=res.photo.smallPhotoUrl>
    <pre v-if=res>{{ res }}</pre>
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
        res: function (state) {
          return state.res
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
