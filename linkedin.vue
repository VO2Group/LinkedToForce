<template>
  <div v-if=!linkedin>
    <a v-on:click.prevent=onLinkedin>LinkedIn</a>
  </div>
</template>
<script>
  module.exports = {
    vuex: {
      getters: {
        linkedin: function (state) {
          return state.linkedin
        }
      },
      actions: {
        onLinkedin: function (store) {
          IN.User.authorize(function () {
            store.dispatch('onLinkedin', true)
          });
        }
      }
    }
  }
</script>
