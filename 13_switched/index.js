// let  day = 7

// if (day == 1) {
//     console.log("Monday")

//     }
// else if (day == 2) {
//     console.log("Tuesday")
// }

// else if (day == 3) {
//     console.log("Wednesday")
// }

// else if (day == 4) {
//     console.log("Thursday")
// }

// else if (day == 5) {
//     console.log("Friday")
// }

// else if (day == 6) {
//     console.log("Saturday")
// }

// else if (day == 7) {
//     console.log("Sunday")
// }
// else {
//     console.log(`${day} is not a valid day`)
// }

const n = document.getElementById("n");
const u = document.getElementById("u");
const s = document.getElementById("s");

n = Number(n);

let day ;
day = 1



switch (day) {
  case 1:
    u.textContent = "Monday"
    // console.log("Monday");
    break;
  case 2:
    u.textContent = "Tuesday"
    // console.log("Tuesday");
    break;
  case 3:
    u.textContent = "Wednesday"
    // console.log("Wednesday");
    break;
  case 4:
    u.textContent = "Thursday"
    // console.log("Thursday");
    break;
  case 5:
    u.textContent = "Friday"
    // console.log("Friday");
    break;
  case 6:
    u.textContent = "Saturday"
    // console.log("Saturday");
    break;
  case 7:
    u.textContent = "Sunday"
    // console.log("Sunday");
    break;
  default:
    u.textContent = `${day} is not a valid day`
    // console.log(`${day} is not a valid day`);
}


// let testscore = 75;
// let grade;

// switch (true) {
//   case testscore >= 90:
//     grade = "A";
//     break;
//   case testscore >= 80:
//     grade = "B";
//     break;
//     case testscore >= 70:
//     grade = "C";
//     break;
//     default:
//     grade = "F";
// }

// console.log(grade);
