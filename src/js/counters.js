const offices = document.querySelector("#offices");
const customers = document.querySelector("#customers");
const workers = document.querySelector("#workers");
const projects = document.querySelector("#projects");
let hasExecuted = false;

const startCountdown = (element, target, delay) => {
  let i = 1;

  const display = async () => {
    switch (element.id) {
      case "offices":
        element.textContent = `${i}`;
        break;
      case "customers":
        element.textContent = `${i}K`;
        break;
      case "workers":
        element.textContent = `${i}`;
        break;
      case "projects":
        element.textContent = `${i}+`;
        break;
      default:
        element.textContent = `${i}`;
        break;
    }
    i++;

    if (i <= target) {
      setTimeout(display, delay);
    }
  };
  display();
};

window.addEventListener("scroll", () => {
  const position = window.scrollY;

  if (position >= 550 && !hasExecuted) {
    startCountdown(offices, 100, 10);
    startCountdown(customers, 3, 500);
    startCountdown(workers, 10, 150);
    startCountdown(projects, 100, 10);
    hasExecuted = true;
  }
});
