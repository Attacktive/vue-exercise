import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/repositories',
			name: 'repositories',
			component: () => import('@/views/RepositoriesView.vue')
		},
		{
			path: '/users',
			name: 'users',
			component: () => import('@/views/UserView.vue')
		},
		{
			path: '/custom-input-components',
			name: 'custom input components',
			component: () => import('@/views/CustomInputComponents.vue')
		}
	]
});

export default router;
