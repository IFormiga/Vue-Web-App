import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import AccountRegistration from '@/components/AccountRegistration'
import AccountInfo from '@/components/AccountInfo'
import TrialAccountInfo from '@/components/TrialAccountInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/AccountRegistration',
      name: 'AccountRegistration',
      component: AccountRegistration
    },
    {
      path: '/AccountInfo',
      name: 'AccountInfo',
      component: AccountInfo
    },
    {
      path: '/TrialAccountInfo',
      name: 'TrialAccountInfo',
      component: TrialAccountInfo
    }
  ]
})
