// let age = 25

// if (age >= 18) {
//     console.log("old")

// }
// else{
//     console.log("young")
// }

// X

// let time = 14

// if (time < 12) {
//     console.log("morning")
// }
// else{
//     console.log("afternoon")
// }

// let isstudent = true;

// if (isstudent) {
//     console.log("bro is a student")
// }
// else{
//     console.log("bro is not a student")
// }

// X

// let age = 18;
// let haslicense = true;


// if (age >= 16) {
//   console.log("16+");

//   if (haslicense) {
//     console.log("has license");
//   } 
//   else {
//       console.log("no license");
//   }
// }


// else {
//   console.log("not 16");
// }

// X
 

const text = document.getElementById("text");
const Element = document.getElementById("Element");
const sumbit = document.getElementById("sumbit")
let age  ;


sumbit.onclick = function () { 

    age = text.value;
    age = Number(age);

    if (age >= 100){
        Element.textContent = 'You are too old to enter this site'
   }

    else if (age >= 18) {
        
    }

    else if (age == 0) {
        Element.textContent ='Error fastopó nincs 0 te geciu'
    }
    else if (age < 0 ) {
        Element.textContent ='Yore are not bellow 0'
    }
    
    

    else {
        Element.textContent = 'not 18+'
    
    }

}



