// let username

// username = window.prompt("What is your name?")

// console.log(username)

let username;

document.getElementById("sumbit").onclick = function () {
  username = document.getElementById("text").value;
  document.getElementById("h1").textContent = `Hello ${username}`;
};
