<template>
  <div v-if=!IN>
    <a href=# v-on:click.prevent=login>LinkedIn</a>
  </div>
</template>
<script>
  module.exports = {
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
        }
      }
    },
    methods: {
      login: function () {
        IN.User.authorize()
      }
    }
  }
</script>
