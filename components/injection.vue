<template>
  <div class=injection>
    <h2>Profil</h2>
    <div v-if=connected>
      <input type=text placeholder="Tapez l'URL LinkedIn d'un profile" v-model=url v-on:change=change>
      <button v-on:click=select v-bind:disabled=!url>Récupérer le profil</button>
      <div v-if=result>
        <h2>{{name}}</h2>
        <h3>{{result.headline}}</h3>
        <img class=avatar v-bind:src=result.pictureUrl>
        <p>Vous allez {{contact ? 'mettre à jour' : 'créer'}} le contact {{name}} dans Salesforce avec les informations suivantes:</p>
        <pre>{{result}}</pre>
        <div v-if=contact>
          <button v-on:click=update>Mettre à jour</button>
        </div>
        <div v-else>
          <button v-on:click=create>Créer</button>
        </div>
      </div>
    </div>
    <div v-else>
      <span>Vous devez vous connecter pour saisir un profil</span>
    </div>
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
      name: function () {
        return this.result.firstName + ' ' + this.result.lastName
      },
      connected: function () {
        return this.IN && this.SF
      }
    },
    vuex: {
      getters: {
        IN: function (state) {
          return state.IN
        },
        SF: function (state) {
          return state.SF
        }
      }
    },
    methods: {
      reset: function () {
        this.url = ''
      },
      change: function () {
        this.result = null
        this.contact = null
      },
      select: function () {
        this.IN.API
          .Raw('/people/url=' + encodeURIComponent(this.url) + ':(id,first-name,last-name,positions,interests,publications,patents,languages,skills,date-of-birth,email-address,phone-numbers,im-accounts,main-address,twitter-accounts,headline,picture-url,public-profile-url)')
          .result(function (data) {
            this.result = data
            this.SF.query("SELECT Id, Name, Email FROM Contact WHERE Name = '" + this.name + "'", function (err, res) {
              if (err)
                throw err
              this.contact = res.records[0]
            }.bind(this))
          }.bind(this))
      },
      create: function () {
        if (confirm('Etes vous sur ?')) {
          this.SF
            .sobject("Contact")
            .create({
              Name: this.name
            },
            function(err, ret) {
              if (err)
                throw err
            })
          this.reset()
        }
      },
      update: function () {
        if (confirm('Etes vous sur ?')) {
          this.SF
            .sobject("Contact")
            .update({
              Id: this.contact.Id,
              Name: this.name
            },
            function(err, ret) {
              if (err)
                throw err
            })
          this.reset()
        }
      }
    }
  }
</script>
