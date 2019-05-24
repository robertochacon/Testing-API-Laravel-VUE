<template>
  <v-container>

    <template>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.nombre }}</td>
          <td class="text-xs-right">{{ props.item.direccion }}</td>
          <td class="text-xs-right">{{ props.item.telefono }}</td>
        </template>
      </v-data-table>
    </template>

    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item.id">
        <v-card flat class="text-xs-center ma-3 grey">
          <v-card-text>
                      <img src="https://www.nacional.cl/images/site/uploads/201812171657471icono3png.png" width="150" alt="">
            <div class="subheading white--text">{{ item.nombre }}</div>
            <div class="white--text">{{ item.direccion }}</div>
            <div class="white--text">{{ item.telefono }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="text-md-center success">
              <v-icon left>shop</v-icon>Store
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  import axios from 'axios'
  // import Grafica from '../components/Grafica'

  export default {
    data: () => ({
      dialog: false,
      headers: [
       { text: 'Nombre', value: 'nombre' },
       { text: 'Direccion', value: 'direccion' },
       { text: 'Telefono', value: 'telefono' },
      ],
      items: [],
    }),
    mounted() {
    	this.getDate()
    },
    methods: {
    	getDate(){
    		axios.get('http://localhost:8000/api/tiendas').then(response => {

          console.log(response.data)
          this.items = response.data;

        }).catch(e => {
          console.log(e)
        })
    	}
    }
  }
</script>
