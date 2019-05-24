<template>

  <Grafica class="mt-3" />
</template>

<script>
  import axios from 'axios'
  import Grafica from '../components/Grafica'

  export default {
    components: {
      Grafica,
    },
    mounted() {
    	this.getDate()
    },
    methods: {
    	getDate(){
    		axios.get('http://localhost:8000/api/productos').then(response => {console.log(response)}).catch(e => {console.log(e)})
    	}
    }
  }
</script>
