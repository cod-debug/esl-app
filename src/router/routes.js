
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'home',
        component: () => import('pages/IndexPage.vue') 
      },
      { 
        path: 'login', 
        name: 'login',
        component: () => import('pages/LoginPage.vue') 
      }
    ]
  },
  {
    path: '/esl-app',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'dashboard',
        component: () => import('pages/teacher/DashboardPage.vue') 
      },
      { 
        path: 'schedule', 
        name: 'schedule',
        component: () => import('pages/teacher/SchedulePage.vue') 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
