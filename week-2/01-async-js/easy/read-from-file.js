const fs = require("fs");

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
let count = 0;
for (let i = 0; i < 10000000; i++) {
  count += i;
}
console.log(count);
