import axios from 'axios';

export function locationSearch(url) {

  const encodedLocation = encodeURIComponent(url);
  const FREE_GEOIP_URL = "http://freegeoip.net/";
  const FREE_GEOIP_FORMAT = "json";
  const FREE_GEOIP_REQUEST = `${FREE_GEOIP_URL}${FREE_GEOIP_FORMAT}/${encodedLocation}`;

  return axios({
    url: FREE_GEOIP_REQUEST,
    timeout: 20000,
    method: 'get',
    responseType: 'json'
  })/*
    .then(function (response) {
      return response.data;
    })
    .catch(function () {
      throw new Error('Unable to fetch geo location for that domain');
    })
   */
}
