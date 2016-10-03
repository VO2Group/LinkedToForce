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
        return this.me2.firstName + ' ' + this.me2.lastName
      },
      connected: function () {
        return this.SF && this.me2
      }
    },
    vuex: {
      getters: {
        SF: function (state) {
          return state.SF
        },
        me2: function (state) {
          return state.me2
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
