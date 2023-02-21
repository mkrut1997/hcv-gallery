import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageView from '../views/ImageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hcv-gallery',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hcv-gallery/:id',
    name: 'image',
    component: ImageView
  }
]

const router = new VueRouter({
  routes
})

export default router
