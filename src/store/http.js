import axiosRaw from "axios"

const axios = axiosRaw.create({
  crossDomain: true,
})

const execute = async (method, endpoint, data) => method(endpoint, data)

const get = async (endpoint, params) => execute(axios.get, endpoint, params)

const put = async (endpoint, params) => execute(axios.put, endpoint, params)

const patch = async (endpoint, data) => execute(axios.patch, endpoint, data)

const post = async (endpoint, data) => execute(axios.post, endpoint, data)

const del = async (endpoint) => execute(axios.delete, endpoint, {})

export default {
  get,
  put,
  patch,
  post,
  del,
  axios,
}

export {get, put, patch, post, del, axios}
