<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'AppProjects',
    components: {
        ProjectCard
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
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in projects">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </main>
</template>