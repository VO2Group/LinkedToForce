<template>
  <div class=injection>
    <input type=text placeholder="Tapez l'URL LinkedIn d'un profile" v-if=connected v-on:change=change v-model=url>
    <button v-if=url v-on:click=select>Injecter le contact dans Salesforce</button>
    <img v-if=result v-bind:src=result.pictureUrl>
    <p v-if=result>Vous allez {{contact ? 'mettre à jour' : 'créer'}} le contact {{result.firstName}} {{result.lastName}} dans Salesforce avec les informations suivantes:</p>
    <p v-if=result>{{result.firstName}} {{correct(result.lastName)}}</p>
    <p v-if=result>{{result.headline}}</p>
    <button v-if=result v-on:click=createOrUpdate>{{contact ? 'Mettre à jour' : 'Créer'}}</button>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        url: '',
        result: null,
        contact: null
      }
    },
    computed: {
      connected: function () {
        return this.IN && this.conn
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
      correct: function (s) {
        return s
          .toUpperCase()
          .replace(/[ÁÀÄÂ]/, 'A')
          .replace(/[ÉÈËÊ]/, 'E')
          .replace(/[ÍÌÏÎ]/, 'I')
          .replace(/[ÓÒÖÔ]/, 'O')
          .replace(/[ÚÙÜÛ]/, 'U')
      },
      change: function (e) {
        this.result = null
        this.contact = null
      },
      select: function (e) {
        this.IN.API
          .Raw('/people/url=' + encodeURIComponent(this.url) + ':(id,first-name,last-name,positions,interests,publications,patents,languages,skills,date-of-birth,email-address,phone-numbers,im-accounts,main-address,twitter-accounts,headline,picture-url,public-profile-url)')
          .result(function (data) {
            this.result = data
            this.conn.query("SELECT Id, Name, Email FROM Contact WHERE Name = '" + this.result.firstName + ' ' + this.correct(this.result.lastName) + "'", function (err, res) {
              if (err)
                throw err
              this.contact = res.records[0]
            }.bind(this))
          }.bind(this))
      },
      createOrUpdate: function (e) {
        if (this.contact) {
          this.conn
            .sobject("Contact")
            .update({
              Id: this.contact.Id,
              Name: this.result.firstName + ' ' + this.correct(this.result.lastName)
            },
            function(err, ret) {
              if (err)
                throw err
            })
        }
        else {
          this.conn
            .sobject("Contact")
            .create({
              Name: this.result.firstName + ' ' + this.correct(this.result.lastName)
            },
            function(err, ret) {
              if (err)
                throw err
            })
        }
        this.url = ''
        this.result = null
        this.contact = null
      }
    }
  }
</script>
