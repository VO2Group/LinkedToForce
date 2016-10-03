<template>
  <div class=salesforce>
    <div v-if=!connected>
      <button class=button v-on:click=login>Connectez vous à<br>Salesforce</button>
    </div>
    <div v-else>
      <h2>{{name}}</h2>
    </div>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      name: function () {
        return this.meSF.firstName + ' ' + this.meSF.lastName
      },
      connected: function () {
        return this.SF && this.meSF
      }
    },
    vuex: {
      getters: {
        SF: function (state) {
          return state.SF
        },
        meSF: function (state) {
          return state.meSF
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
