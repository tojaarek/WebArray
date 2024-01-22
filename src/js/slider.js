const slider = document.getElementById("slider");
let orderIndex = 0;

const changeOrder = () => {
  orderIndex =
    (orderIndex - 1 + slider.children.length) % slider.children.length;
  updateOrder();
};

const updateOrder = () => {
  for (let i = 0; i < slider.children.length; i++) {
    slider.children[i].style.order = (orderIndex + i) % slider.children.length;
  }
};

setInterval(() => {
  changeOrder();
}, 5000);
