import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: () => import('../pages/Login/LoginPage.vue'),
    meta: { authNotRequired: true }
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../pages/User/User.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/registeredUsers',
    name: 'registeredUsers',
    component: () => import('../pages/Favorites/FavoritesPage.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Register/RegisterPage.vue'),
    meta: { authNotRequired: true },
  },
  {
    path: '/videos',
    name: 'videos',
    component: () => import('../pages/Videos/VideosPage.vue'),
    meta: { authNotRequired: true },
  },
  {
    path: '/UploadVideos',
    name: 'uploadVideos',
    component: () => import('../pages/Videos/UploadVideosPage.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/ApproveVideos',
    name: 'ApproveVideos',
    component: () => import('../pages/Videos/ApproveVideos.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/ApproveArticles',
    name: 'ApproveArticles',
    component: () => import('../pages/Blog/ApproveArticles.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/PostArticles',
    name: 'postArticles',
    component: () => import('../pages/Blog/PostArticles.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/Blog/Blog.vue'),
    meta: { authNotRequired: true },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
  path: '/test',
    name: 'Test',
    component: () => import('../pages/test/Test.vue'),
    meta: { authNotRequired: true },
},
]

const router = new VueRouter({
  routes
})

export default router
