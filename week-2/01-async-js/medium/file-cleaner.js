const fs = require("fs");

let content;

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const cleanedStr = data.split(/\s+/).filter(Boolean).join(" ");

    fs.writeFile("test.txt", cleanedStr, "utf-8", (err) => {
      if (err) {
        console.log(err);
      }
      fs.readFile("test.txt", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    });
  }
});

console.log(content);
