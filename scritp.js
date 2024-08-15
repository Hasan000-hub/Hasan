const userName = "Husein";
localStorage.setItem("name", userName);
const retrievedUser = localStorage.getItem("name");
console.log(retrievedUser);

// TASK 2
const user = {
  name: "Husein",
  age: 15,
};
const add = document.getElementById("add");
const get = document.getElementById("get");

add.addEventListener("click", () => {
  localStorage.setItem("user", JSON.stringify(user));
});

get.addEventListener("click", () => {
  JSON.parse(localStorage.getItem("user"));
  const retrievedUser1 = JSON.parse(localStorage.getItem("user"));
  console.log(retrievedUser1);
});

//TASK 3

window.addEventListener("DOMContentLoaded", () => {
  let userName = localStorage.getItem("userName");
  if (!userName) {
    userName = prompt("Please enter some text:");
    localStorage.setItem("text2", userName);
  }
  console.log("Привет " + userName + " Добро пожаловать");
});
