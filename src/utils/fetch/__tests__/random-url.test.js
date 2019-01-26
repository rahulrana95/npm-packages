var fetch = require("../index");

it("testing fetch with a random url", () => {
  return fetch({
    url: "https://reqres.in/api/users?page=2"
  }).then(res => expect(res.status).toEqual(200));
});
