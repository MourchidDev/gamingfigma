import { createRouter, createWebHistory } from 'vue-router';
import login from '@/components/login.vue';
import SignIn from '@/components/SignIn.vue';
import HomePage from '@/components/HomePage.vue';
import Logout from '@/components/Logout.vue';


let isAuthenticated = false; // Change devaleur selon ton état d'authentification

const routes = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/sign',
    component: SignIn,
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/home',
    component: HomePage,
    meta: { requiresAuth: true }, // Protection de la route vers home
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Vérifie l'authentification avant d'accéder aux routes protégées
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/'); // Redirige vers la page de connexion si l'authentification n'as pas été faite
  } else {
    next(); // Permet l'accès
  }
});

//mise à jour de l'état d'authentification
export function setAuthentication(status) {
  isAuthenticated = status;
}

export default router;
