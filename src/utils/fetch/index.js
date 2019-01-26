var fetch = require("./fetch");
console.log(
  fetch({
    url: "http://google.com"
  })
);

module.exports = fetch;
