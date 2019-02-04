import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AccountRegistration from '@/components/AccountRegistration'
import AccountInfo from '@/components/AccountInfo'
import TrialAccountInfo from '@/components/TrialAccountInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/AccountRegistration',
      name: 'Account Registration',
      component: AccountRegistration
    },
    {
      path: '/AccountInfo',
      name: 'Account Info',
      component: AccountInfo
    },
    {
      path: '/TrialAccountInfo',
      name: 'Trial Account Info',
      component: TrialAccountInfo
    }
  ]
})
