//Task-1
const userName1 = "Samir";

localStorage.setItem("Name", userName1);
const local = localStorage.getItem("Name");
console.log("Добро пожаловать " + local);

//Task-2
const user = {
  name: "Amir",
  age: 12,
  city: "Moscow",
};

const deep = JSON.stringify(user);

const button1 = document.getElementById("btn-1");

button1.addEventListener("click", () => {
  localStorage.setItem("Information", deep);
});

const button2 = document.getElementById("btn-2");

button2.addEventListener("click", () => {
  const local2 = localStorage.getItem("Information");
  console.log(local2);
});

//Task-3

window.addEventListener("DOMContentLoaded", () => {
  let hz = localStorage.getItem("Имя");
  if (!hz) {
    hz = prompt("Введите имя");
    localStorage.setItem("Имя ", hz);
  }
  alert("Привет, " + hz + "! Мы рады тебя видить!");
});

//Task-4

const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const container = document.getElementById("container");
const image = document.getElementById("df");
const image2 = document.getElementById("gh");
let result = 0;

button3.addEventListener("click", () => {
  result = result + 1;
  if (result % 2 === 0) {
    container.style.display = "none";
  } else if (result % 2 != 0) {
    container.style.display = "block";
  }
});
button4.addEventListener("click", () => {
  result = result + 1;
  if (result % 2 === 0) {
    image.src =
      "https://rb.gy/8nhv89";
    image.width = "300";
    image2.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r794k418bmFs9NaD4W_QpCZv4sJ4HEYjmA&s";
  } else if (result % 2 != 0) {
    image.src =
      "https://ss.sport-express.ru/userfiles/materials/181/1817607/volga.jpg";
    image2.src =
      "data:image/png;base64,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";
  }
});
