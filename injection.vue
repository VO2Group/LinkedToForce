<template>
  <div>
    <input type=text v-model=url v-bind:disabled=!connected>
    <a href=# v-if=injectable v-on:click.prevent=inject>Injecter</a>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        url: ''
      }
    },
    computed: {
      connected: function () {
        return this.IN && this.conn
      },
      injectable: function () {
        return this.connected && this.url
      }
    },
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
        },
        conn: function (state) {
          return state.conn
        }
      }
    },
    methods: {
      inject: function (e) {
        this.IN.API
          .Raw('/people/url=' + encodeURIComponent(this.url))
          .result(function (data) {
            console.log(data)
          })
      }
    }
  }
</script>
