<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TechnologyList',
    data() {
        return {
            store,
            currentTechnology: '',
            technologies: []
        }
    },
    methods: {
        getTechnologies() {
            axios.get(`${this.store.apiBaseUrl}/technologies`)
                .then((response) => {
                    this.technologies = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changePage(slug){
            this.currentTechnology = slug;
            this.$router.push({name: 'technology', params:{slug: this.currentTechnology}});
        }
    },
    created(){
        this.getTechnologies();
    }
}
</script>

<template>
    <!-- <select class="form-select" v-if="types.length > 0" @change="changePage" v-model="currentType">
        <option :value="type.slug" v-for="type in types">{{ type.name }}</option>
    </select> -->
    <ul class="list-unstyled m-0">
        <li 
            v-if="technologies.length > 0" 
            v-for="technology in technologies" 
            :value="technology.slug" 
            @click="changePage(technology.slug)"
            >{{ technology.name }}</li>
    </ul>
</template>