<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';
import TechnologyList from '../components/TechnologyList.vue';
export default {
    name: 'AppTypes',
    components: {
        ProjectCard,
        TechnologyList
    },
    data() {
        return {
            store,
            type: null
        }
    },
    methods: {
        getType() {
            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`)
                .then((response) => {
                    this.type = response.data.results;
                })
        }
    },
    created() {
        this.getType();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({ toParams })
                console.log({ previousParams })
                this.getType();
            }
        )
    }
}
</script>

<template>
    <section v-if="type">
        <div class="row">
            <div class="col-1 d-flex justify-content-center my-4">
                <TechnologyList />
            </div>
            <div class="col-10">

                <div class="d-flex justify-content-between align-items-center">
                    <h1 class="mt-5 mb-3">Type: {{ type.name }}</h1>
                    <div>
                        <router-link :to="{ name: 'projects' }" class="btn btn-success">
                            Back to projects
                        </router-link>
                    </div>
                </div>

                <div class="row my-4 gy-4">
                    <div class="col col-md-4" v-for="project in type.projects">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container"> -->
        <!-- </div> -->
    </section>
</template>