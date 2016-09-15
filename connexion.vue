<template>
  <div>
    <button v-if=connected v-on:click=logout>Déconnexion</button>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      connected: function () {
        return this.linkedin || this.salesforce
      }
    },
    vuex: {
      getters: {
        linkedin: function (state) {
          return state.linkedin
        },
        salesforce: function (state) {
          return state.salesforce
        },
      },
      actions: {
        logout: function (store) {
          store.dispatch('onLinkedin', false)
          store.dispatch('onSalesforce', false)
        }
      }
    }
  }
</script>
