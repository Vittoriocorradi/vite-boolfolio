<script>
import TypeList from './TypeList.vue';

export default {
    name: 'AppHeader',
    components: {
        TypeList
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between">
                <div>My Page</div>
                <ul class="list-unstyled gap-2 d-flex">
                    <li>
                        <router-link :to="{ name: 'home' }" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects' }" class="nav-link">
                            Projects
                        </router-link>
                    </li>
                    <li>
                        <TypeList/>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>