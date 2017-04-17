import axios from 'axios';
import qs from 'qs';


function dataFetcher({ baseUrl }) {
  const fetch = axios.create({
    baseUrl,
    paramsSerializer: params => qs.stringify(params, { indices: false })
  });

  function getData(url, params = {}) {
    return fetch(baseUrl + url, {
      params
    })
  }

  return {
    getData
  };
}

export default dataFetcher;
