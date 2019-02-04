<template>
  <div>
      <div class="white elevation-2">
        <v-toolbar>
          <button @click="create">Voltar</button>
          <v-toolbar-title>New Account</v-toolbar-title>
        </v-toolbar>
        <br>
        <v-subheader>General Info</v-subheader>
        <v-divider></v-divider>
      </div>
      <div class="container">
        <form>
          <p>
            <strong>*ID: </strong>
            <input
            id="a"
            type="number"
            name="id"
            v-model="id"
            placeholder="ID"
            required="true">
            <br>
            <br>
          </p>
          <p>
            <strong>*First Name: </strong>
            <input
            type="text"
            name="first name"
            v-model="firstName"
            placeholder="First Name"
            required="true">
            <br>
            <br>
          </p>
          <p>
            <strong>Middle Name: </strong>
            <input
            type="text"
            name="middle name"
            v-model="middleName"
            placeholder="Middle Name">
            <br>
            <br>
          </p>
          <p>
            <strong>*Last Name: </strong>
            <input
            type="text"
            name="last name"
            v-model="lastName"
            placeholder="Last Name"
            required="true">
            <br>
            <br>
          </p>
          <p>
            <strong>*Birth Date: </strong>
            <input
            type="date"
            name="birth date"
            v-model="birthDate"
            placeholder="mm/dd/yyyy"
            required="true">
            <br>
            <br>
          </p>
          <p>
            <strong>*Email: </strong>
            <input
            type="email"
            name="email"
            v-model="email"
            placeholder="Email"
            required="true">
          </p>
          <br>
        </form>
      </div>
      <v-subheader>Localization Info</v-subheader>
      <v-divider></v-divider>
      <div class="container">
        <form>
          <p>
            <strong>*Country: </strong>
            <input
            type="text"
            name="country"
            v-model="country"
            placeholder="Country"
            required="true">
            <br>
            <br>
          </p>
          <p>
            <strong>*State: </strong>
            <input
            type="text"
            name="state"
            v-model="state"
            placeholder="State"
            required="true">
            <br>
            <br>
          </p>
          <p>
            <strong>*City: </strong>
            <input
            type="text"
            name="city"
            v-model="city"
            placeholder="City">
            <br>
            <br>
          </p>
          <p>
            <strong>*Address Line 1: </strong>
            <input
            type="text"
            name="address Line 1"
            v-model="addressLine1"
            placeholder="Address Line 1"
            required="true">
            <br>
            <br>
          </p>
          <p>
            <strong>Address Line 2: </strong>
            <input
            type="text"
            name="address Line 2"
            v-model="addressLine2"
            placeholder="Address Line 2">
            <br>
            <br>
          </p>
          <p>
            <strong>*ZIP/Postal Code: </strong>
            <input
            type="text"
            pattern="[0-9]{5}"
            name="zip/postal code"
            v-model="zipPostalCode"
            placeholder="ZIP/Postal Code"
            required="true">
          </p>
          <br>
        </form>
      </div>
      <v-subheader>Account</v-subheader>
      <v-divider></v-divider>
      <div class="container">
        <form>
          <p>
            <strong>*Account Type: </strong>
            <input
            type="text"
            name="account type"
            v-model="accountType"
            placeholder="Account Type"
            required="true">
            <br>
            <br>
          </p>
        </form>
      </div>
    </div>

</template>

<script>
export default {
  name: 'AccountRegistration',
  data () {
    return {
      id: 0,
      firstName: '',
      middleName: '',
      lastName: '',
      birthDate: '',
      email: '',
      country: '',
      state: '',
      city: '',
      addressLine1: '',
      addressLine2: '',
      zipPostalCode: '',
      accountType: ''
    }
  },
  methods: {
    async create () {
      // todo: implementar a conexão com o backend
      try {
        this.$router.push({
          name: 'HelloWorld'
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
.container {
  width: 600px;
  clear: both;
}

.container input {
  width: 100%;
  clear: both;
}
form  { display: table;      }
p     { display: table-row;  }
strong { display: table-cell; }
input { display: table-cell; }
</style>
