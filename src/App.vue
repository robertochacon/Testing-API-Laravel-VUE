<template>
  <v-app>
    <v-toolbar color="success" dark fixed app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
          <router-link to="/inicio">
            <v-btn color="dark" dark>
              <v-icon dark left>home</v-icon>Home
            </v-btn>
          </router-link>

          <router-link to="/tiendas">
            <v-btn color="dark">
              <v-icon dark left>shop</v-icon>Store
            </v-btn>
          </router-link>

          <router-link to="/productos">
            <v-btn color="dark">
              <v-icon dark left>shopping_cart</v-icon>Products
            </v-btn>
          </router-link>

          <router-link to="/contacto">
            <v-btn color="dark">
              <v-icon left>perm_contact_calendar</v-icon>Contact
            </v-btn>
          </router-link>

    </v-toolbar>

    <v-content>
      <router-view/>
      <!-- <HelloWorld/> -->
    </v-content>
  </v-app>
</template>

<script>
import Tabla from './components/Tabla'

export default {
  name: 'App',
  components: {
    Tabla
  },
  data () {
    return {
      //
    }
  }
}
</script>
