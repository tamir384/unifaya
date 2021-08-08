import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'

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
    component: () => import('../pages/login/LoginPage.vue'),
    meta: { authNotRequired: true }
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../pages/user/User.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',
    component: () => import('../pages/favorites/FavoritesPage.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/register/RegisterPage.vue'),
    meta: { authNotRequired: true },
  },
  {
    path: '/videos',
    name: 'videos',
    component: () => import('../pages/videos/VideosPage.vue'),
    meta: { authNotRequired: true },
  },
  {
    path: '/UploadVideos',
    name: 'uploadVideos',
    component: () => import('../pages/videos/UploadVideosPage.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/ApproveVideos',
    name: 'ApproveVideos',
    component: () => import('../pages/videos/ApproveVideos.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/ApproveArticles',
    name: 'ApproveArticles',
    component: () => import('../pages/blog/ApproveArticles.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/PostArticles',
    name: 'postArticles',
    component: () => import('../pages/blog/PostArticles.vue'),
    meta: { authNotRequired: false },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/blog/Blog.vue'),
    meta: { authNotRequired: true },
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../pages/blog/Article.vue'),
    meta: { authNotRequired: true },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../pages/about/About.vue')
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
