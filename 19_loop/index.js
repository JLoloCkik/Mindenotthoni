let text = "";
let i = 0;
do {
  text += i + "<br>";
  i++;
} while (i < 6);
document.getElementById("demo").innerHTML = text;

// let username = ""

// while(username === "" || username === null) {
// username = window.prompt(`Youre name`)
// }

//     console.log(`hello ${username}`)

let leggedin = false;
let username;
let password;

while (!leggedin) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "u" && password === "p") {
    leggedin = true;
    console.log(`You are logged in`);
  } else {
    console.log(`You are not logged in`);
  }
} 
