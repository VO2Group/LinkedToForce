<template>
  <div class=injection>
    <input type=text v-model=url v-bind:disabled=!connected>
    <a href=# v-if=injectable v-on:click.prevent=inject>Injecter</a>
    <img v-if=result v-bind:src=result.pictureUrl>
    <pre v-if=result>{{ result | json 4 }}</pre>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        url: '',
        result: null
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
        var that = this
        that.IN.API
          .Raw('/people/url=' + encodeURIComponent(this.url) + ':(id,first-name,last-name,positions,interests,publications,patents,languages,skills,date-of-birth,email-address,phone-numbers,im-accounts,main-address,twitter-accounts,headline,picture-url,public-profile-url)')
          .result(function (data) {
            that.result = data
          })

        that.conn.query('SELECT Id, Name FROM Contact', function (err, res) {
          if (err)
            throw err
          console.log(res)
        })
      }
    }
  }
</script>
<style>
  .injection {
    color: white;
  }
</style>
