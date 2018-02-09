import Vue from 'vue'
import Router from 'vue-router'
import rank from 'components/rank/rank'
import search from '../components/search/search.vue'
import recommend from '../components/recommend/recommend.vue'
import singers from '../components/singers/singers.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
    path:'/rank',
    component:rank
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/recommend',
      component:recommend
    },
    {
      path:'/singers',
      component:singers
    }
  ]
})
