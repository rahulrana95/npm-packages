var fetch = require("../index");

test("testing fetch with a url", () => {
  let resp = await fetch({
    url: "https://jestjs.io/docs/en/getting-started"
  });

  console.log(resp);
  expect(1).toBe(1);
});
