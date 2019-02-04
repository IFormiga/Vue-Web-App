import Api from '@/services/api'

export default {
  index () {
    return Api().get('accountHistory')
  },
  show (userId) {
    return Api().get(`accountHistory/${userId}`)
  },
  post (accountHistory) {
    return Api().post('accountHistory', accountHistory)
  }
}
