import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/App.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: { breadcrumb: 'Home' },
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/About.vue'),
          meta: { breadcrumb: 'About' },
        },
        {
          path: 'browse',
          component: () => import('@/views/Browse.vue'),
          meta: { breadcrumb: 'Browse' },
          redirect: '/browse/events',
          children: [
            {
              path: 'events',
              name: 'events',
              component: () => import('@/views/EventList.vue'),
              meta: { breadcrumb: 'Event List' },
            },
            {
              path: 'events/:id',
              name: 'event-detail',
              component: () => import('@/views/EventDetail.vue'),
              meta: { breadcrumb: 'Event Detail' },
            },
            {
              path: 'category',
              name: 'category',
              component: () => import('@/views/Category.vue'),
              meta: { breadcrumb: 'Category' },
            },
          ],
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/Contact.vue'),
          meta: { breadcrumb: 'Contact' },
        },
        {
          path: ':pathMatch(.*)*',
          name: 'not-found',
          component: () => import('@/views/NotFound.vue'),
          meta: { breadcrumb: 'Page not found' },
        },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router