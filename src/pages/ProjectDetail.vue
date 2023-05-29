<script>
import axios from 'axios';
export default {
    name: 'ProjectDetail',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: []
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <router-link :to="{ name: 'projects' }" class="btn btn-primary">
        Back to projects list
    </router-link>
    <h1>{{ project.title }}</h1>
    <p>{{ project.overview }}</p>
</template>