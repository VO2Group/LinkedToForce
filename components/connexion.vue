<template>
  <div class=connection>
    <h2>Etat</h2>
    <div v-if=connected>
      <label>Vous serez déconnecté de LinkedIn et/ou Salesforce</label>
      <button v-on:click=logout>Déconnectez vous</button>
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
