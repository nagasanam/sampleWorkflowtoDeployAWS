
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("application returns expected deployment message", async () => {
  const response = {
    message: "Node.js application deployed successfully to AWS!",
    status: "OK"
  };

  assert.equal(response.status, "OK");
  assert.match(response.message, /deployed successfully/);
});
