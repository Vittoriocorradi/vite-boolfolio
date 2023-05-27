<script>
export default {
    name: 'VueMain',
    props: {
        data: Object
    }
}
</script>

<template>

<main>
    <div class="container">
        <div class="row my-4 gy-4">
            <div class="col col-md-4" v-for="projects in data">
                <div class="card">
                    <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ projects.title }}</h5>
                        <p v-if="projects.overview" class="card-text">{{ projects.overview.substring(0,this.overviewLenght) + '...' }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

</template>

<style>

</style>