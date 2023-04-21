const fs = require("fs");
debugger;
let content = fs.readFileSync("input.csv", "utf8");

// Add a todo if there is a -a flag
if (process.argv[2] === "-a") {
  content += process.argv[3] + ",";
  fs.writeFileSync("input.csv", content);
}

console.log("Here are the todos:");
console.log(content.split(",").join("\n"));
