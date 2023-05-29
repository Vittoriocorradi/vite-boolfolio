import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import AppTypes from './pages/AppTypes.vue';
import AppTechnologies from './pages/AppTechnologies.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectDetail
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: AppTypes
        },
        {
            path: '/technologies/:slug',
            name: 'technology',
            component: AppTechnologies
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: NotFoundPage 
        }
    ]
});
export { router };
