import Api from '@/services/api'

export default {
  index (params) {
    return Api().get('countries', {
      params: params
    })
  }
}
