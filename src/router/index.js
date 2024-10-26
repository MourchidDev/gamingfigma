import { createRouter, createWebHistory } from 'vue-router';
import NewComponent from '@/components/LoginAndRegistration.vue';
import HomePage from '@/components/HomePage.vue';
import Logout from '@/components/Logout.vue';

let isAuthenticated = false; // Change de valeur selon ton état d'authentification

const routes = [
    {
        path: '/',
        component: NewComponent,
    },
    {
        path: '/home',
        component: HomePage,
        meta: { requiresAuth: true }, 
    },
    {
        path: '/logout',
        component: Logout,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Vérifie l'authentification avant d'accéder à la route protégée
router.beforeEach((to, from, next) => {
    if (to.path === '/home' && !isAuthenticated) {
        next('/'); // Redirige vers la page de connexion
    } else {
        next(); // Permet l'accès à toutes les autres routes
    }
});

// Mise à jour de l'état d'authentification
export function setAuthentication(status) {
    isAuthenticated = status;
    localStorage.setItem('isAuthenticated', status); 
}

// À l'initialisation de l'application
isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; 

export default router;
