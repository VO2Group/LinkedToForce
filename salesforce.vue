<template>
  <div v-if=!conn>
    <a href=# v-on:click.prevent=login>SalesForce</a>
  </div>
</template>
<script>
  module.exports = {
    vuex: {
      getters: {
        conn: function (state) {
          return state.conn
        }
      }
    },
    methods: {
      login: function () {
        jsforce.browser.login({
          accessToken: '{!$Api.Session_Id}'
        })
      }
    }
  }
</script>
