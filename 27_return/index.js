// function openfridge(... foods){
//     console.log(...foods)
// }
// function getfoods(...foods){
//     return foods
// }

// const food1 = "p"
// const food2 = "i"
// const food3 = "z"
// const food4 = "z"
// const food5 = "a"

// openfridge(food1, food2, food3, food4, food5)

// const foods = getfoods(food1, food2, food3, food4, food5)

// console.log(foods)


// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//       result += number;
//     }
//     return result;
//   }
  
//   const totala = sum([1, 2, 3]);
//   console.log(`Your total is ${totala}`);

// function getAvrage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//       result += number;
//     }
//     return result /numbers.length;
//   }
//   const total = getAvrage(75, 100, 90)
//   console.log(`Your average is ${total}`)
function combine(...strings){
    return strings.join(" ")

}

const fullname =combine("Mr.","Lolo","Carlos")
