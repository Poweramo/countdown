const h2 = document.querySelector("h2");

const getChrono = () => {
  const now = new Date().getTime();
  const countDownDate = new Date("January 1, 2022").getTime();
  const timer = countDownDate - now;
  const days = Math.floor(timer / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);

  h2.textContent = `2022 c'est dans : ${days}j ${hours}h ${minutes}m ${seconds}s`;

  if (timer < 0) {
    clearInterval(countDownDate);
  }
};

const countDownInterval = setInterval(() => {
  getChrono();
}, 1000);
