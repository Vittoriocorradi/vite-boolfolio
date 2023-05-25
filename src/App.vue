<script>
import axios from 'axios';
import VueMain from './components/VueMain.vue';
export default {
  name:'App',
  data () {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '\projects' 
      }, 
      projects: []
    }
  },
  components: {
    VueMain
  },
  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.apiUrls.projects)
      .then((response) => (
        console.log(response)
      ))}
  },
  created() {
    this.getProjects(); 
  }
}
</script>

<template>
  <VueMain/>
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
