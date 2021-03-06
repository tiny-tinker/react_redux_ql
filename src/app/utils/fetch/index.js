import 'isomorphic-fetch';

import {
  API_BASE,
} from '../../common/constants';

export const rejectErrors = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }

  // we can get message from Promise but no need, just use statusText instead of
  // server return errors, also status code
  return Promise.reject({ message: res.statusText, status: res.status });
};

// try invoke callback for refresh token here
export const fetchJson = (url, options = {}, base = API_BASE) => (
  // in the same server, API_BASE is empty
  // check convenient way of passing base directly
  fetch(/^(?:https?)?:\/\//.test(url) ? url : base + url, {
    ...options,
    headers: {
      ...options.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(rejectErrors)
    // default return empty json when no content, we always use json, never use plain text
    .then((res) => {
      const contentType = res.headers.get('content-type') || '';
      return (res.status !== 204 && contentType.indexOf('application/json') !== -1) ? res.json() : {};
    })
);

export const fetchJsonWithToken = (token, url, options = {}, ...args) => (
  fetchJson(url, {
    ...options,
    headers: {
      ...options.header,
      Authorization: `Bearer ${token.accessToken || token}`,
    },
  }, ...args)
);
