const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(__dirname, "Logs");

// Remove log files
if (fs.existsSync(logsDirectory)) {
  const files = fs.readdirSync(logsDirectory);
  console.log("Files to delete:");
  files.forEach((file) => {
    const filePath = path.join(logsDirectory, file);
    console.log(filePath);
    fs.unlinkSync(filePath);
  });

  // Remove Logs directory
  fs.rmdirSync(logsDirectory);
  console.log("Logs directory deleted.");
} else {
  console.log("Logs directory not found.");
}
