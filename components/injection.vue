<template>
  <div class=injection>
    <div v-if=connected>
      <input type=text placeholder="Tapez l'URL d'un profil LinkedIn" v-model=url v-on:change=change>
      <button class=button v-on:click=select v-bind:disabled=!url>Récupérer le profil</button>
      <div v-if=profil>
        <h2>{{name}}</h2>
        <h3>{{profil.headline}}</h3>
        <img class=avatar v-bind:src=profil.pictureUrl>
        <div v-if=contact>
          <p>Vous allez mettre à jour le contact {{name}} dans Salesforce avec les informations suivantes:</p>
          <pre>{{profil}}</pre>
          <button v-on:click=update>Mettre à jour</button>
        </div>
        <div v-else>
          <p>Vous allez créer le contact {{name}} dans Salesforce avec les informations suivantes:</p>
          <pre>{{profil}}</pre>
          <button v-on:click=create>Créer</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        url: '',
        profil: null,
        contact: null
      }
    },
    computed: {
      name: function () {
        return this.profil.firstName + ' ' + this.profil.lastName
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
        this.profil = null
        this.contact = null
      },
      select: function () {
        this.IN.API
          .Raw('/people/url=' + encodeURIComponent(this.url) + ':(id,first-name,last-name,positions,interests,publications,patents,languages,skills,date-of-birth,email-address,phone-numbers,im-accounts,main-address,twitter-accounts,headline,picture-url,public-profile-url)')
          .result(function (data) {
            this.profil = data
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
            .sobject('Contact')
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
            .sobject('Contact')
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
