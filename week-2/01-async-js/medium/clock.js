// const time = new Date();
// const hours = time.getHours();
// const minutes = time.getMinutes();
// const seconds = time.getSeconds();

const formatTimeAMPM = (h, m, s) => {
  const period = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;
  return (
    String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0") +
    " " +
    period
  );
};
const formatTime = (h, m, s) => {
  return (
    String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0")
  );
};

setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  console.log(formatTimeAMPM(hours, minutes, seconds));
}, 1000);
