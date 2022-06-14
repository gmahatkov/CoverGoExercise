import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FormView from '@/views/FormView.vue';
import SummaryView from '@/views/SummaryView.vue';
import ErrorView from '@/views/ErrorView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/form',
    name: 'form',
    component: FormView,
  },
  {
    path: '/summary',
    name: 'summary',
    component: SummaryView,
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
