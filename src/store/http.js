import axiosRaw from 'axios';
import appConfig from '../app-config.json';

const axios = axiosRaw.create({
  crossDomain: true,
  // baseURL: appConfig.apiEndpoints.base,
});

// axios.interceptors.request.use(config => {
//   if (accessToken) config.headers = { Authorization: `Bearer ${accessToken}` };
//   return config;
// });

const execute = async (method, endpoint, data) => method(endpoint, data);

const get = async (endpoint, params) => execute(axios.get, endpoint, params);

const put = async (endpoint, params) => execute(axios.put, endpoint, params);

const patch = async (endpoint, data) => execute(axios.patch, endpoint, data);

const post = async (endpoint, data) => execute(axios.post, endpoint, data);

const del = async endpoint => execute(axios.delete, endpoint, {});

export default {
  get,
  put,
  patch,
  post,
  del,
  axios,
};

export { get, put, patch, post, del, axios };