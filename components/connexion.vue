<template>
  <div class=connexion>
    <div v-if=connected>
      <button class=button v-on:click=logout>Déconnectez vous</button>
    </div>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      connected: function () {
        return this.IN || this.SF
      }
    },
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
        },
        SF: function (state) {
          return state.SF
        }
      },
      actions: {
        logout: function (store) {
          if (this.IN) {
            this.IN.User.logout()
            store.dispatch('setIN', null)
          }
          if (this.SF) {
            jsforce.browser.logout()
            store.dispatch('setSF', null)
          }
        }
      }
    }
  }
</script>
