const counter = (n) => {
  const countUp = (i) => {
    if (i <= n) {
      console.log(i);
      setTimeout(() => countUp(i + 1), 1000);
    }
  };

  countUp(1);
};

counter(100);
