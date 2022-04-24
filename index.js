const fs = require("fs");

// Block code -> Sync coding
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This file overwrite: ${textIn}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("Write file");

// Non-blocking code -> Async coding
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Read file");
