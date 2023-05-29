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
    <div class="d-flex justify-content-between align-items-center my-4">
        <h1>{{ project.title }}</h1>
        <div>
            <router-link :to="{ name: 'projects' }" class="btn btn-success">
                Back to projects
            </router-link>
        </div>
    </div>
    <h2 v-if="project.type !== null">
        <router-link :to="{ name: 'type', params: { slug: project.type.slug } }" class="text-decoration-none">
            {{ project.type.name }}
        </router-link>
    </h2>
    <p>{{ project.overview }}</p>
    <div v-if="project.technologies !== none" v-for="technology in project.technologies">
        <router-link :to="{ name: 'technology', params: { slug: technology.slug } }" class="text-decoration-none">
            {{ technology.name }}
        </router-link>
    </div>
</template>