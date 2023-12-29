const counter = (n) => {
  setInterval(() => {
    console.log(n);
    n++;
  }, 1000);
};

counter(1);
