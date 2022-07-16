import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'get',
    params: data
  })
}


export function getInfo(token,userId) {
  return request({
    url: '/get_user_rule',
    method: 'get',
    params: { token, userId }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
