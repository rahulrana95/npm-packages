/**
 *
 * @param {Object} obj object
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
  METHOD: "get"
};

function fetch(obj) {
  const url = new URL(obj.url);
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

  obj.headers = Object.assign(
    {
      Accept: Fetch.HEADERS.ACCEPT,
      "Content-Type": Fetch.HEADERS.CONTENT_TYPE
    },
    obj.headers
  );

  return fetch(url.href, obj)
    .then(function(response) {
      return response.json();
    })
    .catch(err => {
      return {
        error: true,
        message: err
      };
    });
}

module.exports = fetch;
