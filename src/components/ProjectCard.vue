<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p v-if="project.overview" class="card-text">{{ project.overview.substring(0, this.project.overviewLenght) + '...' }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>