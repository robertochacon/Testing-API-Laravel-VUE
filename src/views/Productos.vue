<template>
  <Tabla />
</template>

<script>
  import axios from 'axios'
  import Tabla from '../components/Tabla'

  export default {
    components: {
      Tabla,
    },
    mounted() {
    	this.getProducts()
    },
    methods: {
    	getProducts(){
    		axios.get('http://localhost:8000/api/productos').then(response => {
    			console.log(response.data);
    		})
    	}
    }
  }
</script>
