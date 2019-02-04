<template>
  <div>
      <div class="white elevation-2">
        <v-toolbar>
          <button @click="create">Voltar</button>
          <v-toolbar-title>Account History</v-toolbar-title>
        </v-toolbar>
        <form>
            <strong>ID: </strong>
                <v-select
                  :items="items"
                  label="ID"
                ></v-select>
        </form>
      <v-data-table
        :headers="headers"
        :items="userHistory"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.type }}</td>
          <td class="text-xs-center">{{ props.item.date }}</td>
          <td class="text-xs-center">{{ props.item.time }}</td>
        </template>
      </v-data-table>
      </div>
    </div>

</template>

<script>
export default {
  name: 'TrialAccountInfo',
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
      accountType: 'Trial',
      items: [1, 2, 3, 4],
      headers: [
        { text: 'Type', align: 'center', sortable: false, value: 'type' },
        { text: 'Date', value: 'date', align: 'center', sortable: false },
        { text: 'Time', value: 'time', align: 'center', sortable: false }
      ],
      userHistory: [
        {
          type: 'Creation',
          date: '20/12/2018',
          time: '08:12:49'
        },
        {
          type: 'Edition',
          date: '20/01/2019',
          time: '12:32:49'
        }
      ]
    }
  },
  methods: {
    async create () {
      // todo: implementar a conexão com o backend
      try {
        this.$router.push({
          name: 'MainPage'
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
