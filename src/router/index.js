import Vue from 'vue'
import Router from 'vue-router'


import Home from "@/components/home";

import APropos from "@/components/a_propos"

import Contact from "@/components/contact"

import Projet from "@/components/projet"

import Mentions from "@/components/mentions"


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },




    {
      path: '/a_propos',
      name: 'APropos',
      component: APropos
    },


    {
      path: '/projet/:id',
      name: 'Projet',
      component: Projet
    },


    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/mentions',
      name: 'Mentions',
      component: Mentions
    },


  ]
})
