const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(__dirname, "Logs");

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

// Change current process to Logs directory
process.chdir(logsDirectory);

// Create 10 log files and write some text
for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const content = `Content of log file ${i}`;
  fs.writeFileSync(fileName, content);
  console.log(`File created: ${fileName}`);
}

console.log("Log files created.");
