const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'hello', component: () => import('pages/Hello.vue') },
      { path: 'Exercice1Page', component: () => import('pages/Exercice1Page.vue') },
      { path: 'Exercice2Page', component: () => import('pages/Exercice2Page.vue') }
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
