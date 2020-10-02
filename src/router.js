import Vue from 'vue'
import Router from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import NotFound from '@/views/NotFound.vue'
import Preview from '@/views/Preview.vue'
import Home from '@/views/Home.vue'
import BuyServices from '@/views/BuyServices.vue'
import Services from '@/views/Services.vue'
import JobPortal from '@/views/JobPortal.vue'
import BePartner from '@/views/BePartner.vue'
import PostYourJob from '@/views/PostYourJob.vue'

//Vue.use ( Router );

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/buyservices',
    name: 'BuyServices',
    component: BuyServices
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/job-portal',
    name: 'JobPortal',
    component: JobPortal
  },            
  {
    path: '/be-a-partner',
    name: 'BePartner',
    component: BePartner
  },    
  {
    path: '/post-your-job',
    name: 'PostYourJob',
    component: PostYourJob
  },
  {
    path: '/preview',
    name: 'preview',
    component: Preview
  },
  {
    path: '/*',
    redirect: { name: 'not-found' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;