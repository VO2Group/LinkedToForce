<template>
  <div class=injection>
    <input type=text placeholder="Tapez l'URL LinkedIn d'un profile" v-if=connected v-on:change=change v-model=url>
    <button v-if=url v-on:click=select>Injecter le contact dans Salesforce</button>
    <img class=avatar v-if=result v-bind:src=result.pictureUrl>
    <span v-if=result>
      Vous allez {{contact ? "mettre à jour" : "créer"}} le contact {{result.firstName}} {{result.lastName}} dans Salesforce avec les informations suivantes:
    </span>
    <span v-if=result>Prénom: {{result.firstName}}</span>
    <span v-if=result>Nom: {{result.lastName}}</span>
    <span v-if=result>Domaine: {{result.headline}}</span>
    <span v-if=result>Expérience courante <span v-if=result.positions.values[0].startDate>({{result.positions.values[0].startDate.month}}/{{result.positions.values[0].startDate.year}}):</span></span>
    <span v-if=result>
      {{result.positions.values[0].title}} chez {{result.positions.values[0].company.name}} ({{result.positions.values[0].company.industry}}, {{result.positions.values[0].company.size}} salariés)
    </span>
    <span v-if=result>
      {{result.positions.values[0].summary}}
    </span>
    <button v-if=result v-on:click=go>{{contact ? "Mettre à jour" : "Créer"}}</button>
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
      change: function (e) {
        this.result = null
        this.contact = null
      },
      select: function (e) {
        var that = this
        var correct = function (s) {
          var _s = s.toUpperCase()

          return _s
            .replace(/[ÁÀÄÂ]/, 'A')
            .replace(/[ÉÈËÊ]/, 'E')
            .replace(/[ÍÌÏÎ]/, 'I')
            .replace(/[ÓÒÖÔ]/, 'O')
            .replace(/[ÚÙÜÛ]/, 'U')
        }

        that.IN.API
          .Raw('/people/url=' + encodeURIComponent(that.url) + ':(id,first-name,last-name,positions,interests,publications,patents,languages,skills,date-of-birth,email-address,phone-numbers,im-accounts,main-address,twitter-accounts,headline,picture-url,public-profile-url)')
          .result(function (data) {
            that.result = data
            that.conn.query("SELECT Id, Name, Email FROM Contact WHERE Name = '" + that.result.firstName + ' ' + correct(that.result.lastName) + "'", function (err, res) {
              console.log(err)
              console.log(res)
              if (err)
                throw err
              that.contact = res.records[0]
            })
          })
      },
      go: function (e) {
        
      }
    }
  }
</script>
<style>
  .injection {
    display: flex;
    flex-direction: column;
  }
</style>
