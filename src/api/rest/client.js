import { makeRequest } from '../requests'
import env from '../../../env'

export const getUser = () => {
  return makeRequest({
    url: '/user'
  })
}

export const getToken = (code) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    withBaseUrl: false,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      clientId: env.clientId,
      code,
      clientSecret: env.clientSecret
    }
  })
}
