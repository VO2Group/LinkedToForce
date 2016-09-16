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
          .Profile('url=' + this.url)
          .fields([
            'firstName',
            'lastName',
            'headline',
            'positions:(company,title,summary,startDate,endDate,isCurrent)',
            'industry',
            'location:(name,country:(code))',
            'pictureUrl',
            'publicProfileUrl',
            'emailAddress',
            'educations',
            'dateOfBirth'
          ])
          .result(function (data) {
            console.log(data);
          })

          console.log(this.conn.userInfo)

          // this.conn.query('SELECT Id, Name FROM Account', function (err, res) {
          //   if (err) return
          //   console.log(res)
          // })
      }
    }
  }
</script>
