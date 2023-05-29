<!-- <script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
// import VueMain from './components/VueMain.vue';
export default {
  name: 'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  components: {
    AppHeader
  },
  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.apiUrls.projects)
        .then((response) => {
          console.log(response.data.results);
          this.projects = (response.data.results);
        })
    }
  },
  created() {
    this.getProjects();
  }
}
</script> -->

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader/>
  <!-- <VueMain :data="projects"/> -->
  <router-view></router-view>
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
