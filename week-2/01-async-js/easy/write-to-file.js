const fs = require("fs");

const data = "Hello there i am writing";

fs.writeFile("write.txt", data, "utf-8", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("done");
});
