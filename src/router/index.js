import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/ExamplesTypography.vue')
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: () => import('../views/ExamplesInputs.vue')
    },
		{
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/ExamplesButtons.vue')
    }
  ]
})

export default router
