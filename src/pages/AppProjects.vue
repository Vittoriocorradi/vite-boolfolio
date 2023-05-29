<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: []
        }
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