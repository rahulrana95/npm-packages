var fetch = require("../index");

test("testing fetch without a url key", () => {
  expect(fetch({})).toEqual({ error: true, message: "url is not defined" });
});
