<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'AppTechnologies',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            technology: null
        }
    },
    methods: {
        getTechnology() {
            axios.get(`${this.store.apiBaseUrl}/technologies/${this.$route.params.slug}`)
                .then((response) => {
                    this.technology = response.data.results;
                })
        }
    },
    created() {
        this.getTechnology();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({ toParams })
                console.log({ previousParams })
                this.getTechnology();
            }
        )
    }
}
</script>

<template>
    <section v-if="technology">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="mt-5 mb-3">Technology: {{ technology.name }}</h1>
                <div>
                    <router-link :to="{ name: 'projects'}" class="btn btn-success">
                        Back to projects
                    </router-link>
                </div>
            </div>

            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in technology.projects">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </section>
</template>