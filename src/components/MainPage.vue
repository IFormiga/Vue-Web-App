<template>
  <div class="white elevation-2">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <button class="btn"><i class="fa fa-camera"></i></button>
        <button class="btn"><i class="fa fa-user"></i></button>
        <button class="btn"><i class="fa fa-envelope"></i></button>
        <button class="btn"><i class="fa fa-gear"></i></button>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout>
    <v-flex class="flex" xs12 sm1 offset-sm0>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Account Info</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="goToPage('TrialAccountInfo')" flat color="orange">Details</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex class="flex" xs12 sm1 offset-sm0>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Create New Account</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="goToPage('AccountRegistration')" flat color="orange">Details</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex class="flex" xs12 sm1 offset-sm0>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Trial Account Info</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="goToPage('TrialAccountInfo')" flat color="orange">Details</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
    }
  },
  methods: {
    goToPage (page) {
      // todo: implementar a conexão com o backend
      try {
        this.$router.push({
          name: page
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  padding: 12px 20px; /* Some padding */
}
.btn {
  background-color: inherit; /* Blue background */
  border: none; /* Remove borders */
  color: black; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
}
</style>
