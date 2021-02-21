import { createRouter, createWebHistory } from 'vue-router';
import authService from '../services/auth';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Callback from '../views/Callback.vue';
import Logout from '../views/Logout.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const guardFilter = async () => {
    const user = await authService.instance().getUser();
    if (to.meta?.requiresAuth && !user) {
      next('/login');
    } else {
      next();
    }
  };
  guardFilter();
});

export default router;
