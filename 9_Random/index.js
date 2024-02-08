// const min = 50
// const max = 100

// let random =Math.floor(Math.random() * (max - min)) + min ;

// console.log(random);


const b = document.getElementById("b");

const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const min = 1;
const max = 100;
let randomnum1;
let randomnum2;
let randomnum3;
let randomnum4;

b.onclick = function () {
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;
    randomnum4 = Math.floor(Math.random() * max) + min;

    l1.textContent = randomnum1;
    l2.textContent = randomnum2;
    l3.textContent = randomnum3;
    l4.textContent = randomnum4;
};

