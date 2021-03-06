const wfetch = require("whatwg-fetch");

/**
 *
 * @param {Object} obj object.
 * @param {String} obj.url url to send request
 * @param {Object} obj.body body for post method
 * @param {Object} query queries for url
 * @param {Func} obj.success
 */

const Fetch = {
  TYPEOF_OBJECT: "object",
  HEADERS: {
    ACCEPT: "application/json",
    CONTENT_TYPE: "application/json"
  },
  METHOD: "GET"
};

function fetchMethod(obj) {
  if (!obj.url) {
    return {
      error: true,
      message: "url is not defined"
    };
  }

  const url = new window.URL(obj.url);
  obj.body = JSON.stringify(obj.body);
  let query = {};

  if (obj.method === undefined) {
    obj.method = Fetch.METHOD.GET;
    ({ query } = obj);

    if (query && typeof query === Fetch.TYPEOF_OBJECT) {
      for (let key in query) {
        if (query.hasOwnProperty(key)) {
          url.searchParams.append(key, query[key]);
        }
      }
    }
  }

  obj.headers = Object.assign({}, obj.headers);

  let fetchWork = "";

  if (fetch) {
    fetchWork = fetch;
  } else {
    fetchWork = wfetch.fetch;
  }

  return fetchWork(url.href, obj);
}

module.exports = fetchMethod;
