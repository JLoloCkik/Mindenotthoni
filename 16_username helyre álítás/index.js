let username = window.prompt("enter Your username");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extra = username.slice(1);
// extra = extra.toLowerCase();

// username = letter + extra

// console.log(username)

username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase()

console.log(username)