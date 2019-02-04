import Api from '@/services/api'

export default {
  index (user) {
    return Api().get('users', {
      params: {
        user: user
      }
    })
  },
  show (userId) {
    return Api().get(`users/${userId}`)
  },
  post (user) {
    return Api().post('users', user)
  },
  put (user) {
    return Api().put(`users/${user.id}`, user)
  }
}
