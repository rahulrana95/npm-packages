var fetch = require("../index");

it("testing fetch with a random url", () => {
  expect.assertions(1);

  return fetch({
    url: "https://github.com/facebook/jest/issues/3126"
  }).catch(e => console.log(e));
});
