// callbacks.js

function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved successfully!");
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected with an error."));
    }, 500);
  });
}

module.exports = {
  resolvedPromise,
  rejectedPromise,
};
