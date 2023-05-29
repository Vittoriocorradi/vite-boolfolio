import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
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
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: NotFoundPage 
        }
    ]
});
export { router };
