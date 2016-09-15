<template>
  <div v-if=!salesforce>
    <h2>SalesForce</h2>
    <button v-on:click=login>Connexion</button>
  </div>
</template>
<script>
  module.exports = {
    vuex: {
      getters: {
        salesforce: function (state) {
          return state.salesforce
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
