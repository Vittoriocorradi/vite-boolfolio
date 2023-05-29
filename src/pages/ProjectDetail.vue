<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'ProjectDetail',
    data() {
        return {
            store,
            project: []
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`)
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