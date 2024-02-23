// function hp(username,age){
//     console.log("hp to you");
//     console.log("hp to you");
//     console.log("hp to you");
//     console.log(`hp to you ${username}`);
//     console.log(`You are  ${age} years old`);
// }
// hp("Bro lolo", 25);
// hp("SpongeBob", 25);
// hp("Patric", 65);

function add(x, y) {
//   let rest = x + y;
//   return rest;
return x + y;
  
}
function sub(x, y){
    return x - y
}
function mult(x, y){
    return x * y
}
function div(x, y){
    return x / y
}
function even(number){
// if(number % 2 === 0){
//     return true;

// }
// else{
//     return false;
// }
return number % 2 === 0 ? true : false;
}
function email(email){
//     if(email.includes("@")){
//         return true;
//     }
// else {
//     return false;
// }
return email.includes("@") ? true : false;
}




// let answer = add(2, 3);
// console.log(answer);

console.log (add(2, 3));
console.log (sub(2, 3));
console.log (mult(2, 3));
console.log (div(2, 3));
console.log (even(13))
console.log (email("lolo@gmail.com"))
console.log (email("lologmail.com"))
 