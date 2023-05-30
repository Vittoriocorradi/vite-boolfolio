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
            <div class="d-flex justify-content-between align-items-center p-2">
                <div>My Page</div>
                <ul class="list-unstyled m-0 gap-2 d-flex align-items-center">
                    <li>
                        <router-link :to="{ name: 'home' }" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contact-us' }" class="nav-link">
                            Contact Us
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

<style lang="scss">
    header {
        background-color: #457b9d;
    }
</style>

<!-- e63946 f1faee a8dadc 457b9d 1d3557 -->