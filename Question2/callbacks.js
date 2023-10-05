const { resolvedPromise, rejectedPromise } = require("./callbacks.js");

resolvedPromise()
  .then((result) => {
    console.log("Resolved Promise Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

rejectedPromise()
  .then((result) => {
    console.log("Resolved Promise Result:", result);
  })
  .catch((error) => {
    console.error("Rejected Promise Error:", error.message);
  });
