function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Input is not an array");
    } else {
      const filteredWords = arr.filter((item) => typeof item === "string");
      const lowercasedWords = filteredWords.map((word) => word.toLowerCase());
      resolve(lowercasedWords);
    }
  });
}

// Example usage:
const mixedArray = [1, "Apple", "Banana", "Orange", 3, "Mango", "Grapes"];
lowerCaseWords(mixedArray)
  .then((result) => {
    console.log("Lowercased words:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
