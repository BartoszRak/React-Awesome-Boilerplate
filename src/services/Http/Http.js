import axios from 'axios'

import * as handlers from './handlers'
import Config from '../config'

class Http {
  constructor() {
    this._axios = axios.create({
      baseURL: Config.apiUrl,
    })

    this.configureHandlers()
    this.unpackRestMethods()
  }

  configureHandlers() {
    // See Https://github.com/axios/axios#request-config for more customization.
    this._axios.interceptors.response.use(
      response => response,
      error => {
        handlers.handleGlobalHttpError(error)
        return Promise.reject(error)
      }
    )
  }

  unpackRestMethods() {
    const methods = ['get', 'post', 'patch', 'delete', 'put', 'options']
    methods.forEach(method => {
      this[method] = this._axios[method]
    })
  }

  setAuthToken = token => {
    this._axios.defaults.headers.Authorization = `Bearer ${token}`
  }

  removeAuthToken = () => {
    delete this._axios.defaults.headers.Authorization
  }
}

export default new Http()
