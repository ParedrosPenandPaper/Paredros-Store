<template>
  <div id="app">
    <navigation></navigation>
    <hr> <!--- @Ismael wird dieses hr ausschimpfen --->
    <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
    <router-view />
  </div>
</template>

<script>
  import navigation from "@/components/navigation/navigation";

  export default {
    name: 'app',
    components: {
      navigation
    },
    methods : {
        loadScript : function () {
          // eslint-disable-next-line no-unused-vars
          let metaClientID = document.createElement('meta')
          metaClientID.setAttribute('name', 'google-signin-client_id')
          metaClientID.content = '215890179836-p9l9tc3kbqpvm9ujt6i6id7u5k387svt.apps.googleusercontent.com'
          document.head.appendChild(metaClientID)

          let googleSignInScript = document.createElement('script')
          googleSignInScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
          googleSignInScript.async = true
          googleSignInScript.defer = true
          document.head.appendChild(googleSignInScript)
        },
      onSignIn : function(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }

  },
    mounted() {
      this.loadScript()
    }
  }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
