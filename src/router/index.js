import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { getUser } from '../service/securityService';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'User',
    meta: { requiresAuth: true },
    component: () => import('../views/User.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    if (await getUser()) {
      next();
    } else {
      console.log('not Login');
    }
  } else {
    next();
  }
});

export default router;
