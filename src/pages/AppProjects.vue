<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';
import TechnologyList from '../components/TechnologyList.vue';
export default {
    name: 'AppProjects',
    components: {
        ProjectCard,
        TechnologyList
    },
    data() {
        return {
            store,
            projects: []
        }
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.apiBaseUrl}/projects`)
                .then((response) => {
                    // console.log(response.data.results);
                    this.projects = (response.data.results);
                })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <h1>My Projects</h1>
    <main>
        <div class="row">
                <div class="col-1 d-flex justify-content-center my-4">
                    <TechnologyList/>
                </div>
            <!-- <div class="container"> -->
                <div class="col-10 row my-4 gy-4">
                    <div class="col col-md-4" v-for="project in projects">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            <!-- </div> -->
        </div>
    </main>
</template>