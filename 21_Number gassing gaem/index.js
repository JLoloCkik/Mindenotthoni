const minNumber = 1;
const maxNumber = 100;
const answer =Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;


let attempt = 0;
let guess;
let runing = true;


while (runing) {
  guess = window.prompt(`Guese number ${minNumber} - ${maxNumber}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valide number");
  } else if (guess < minNumber || guess > maxNumber) {
    window.alert("Please enter a valide number");
  } else {
    attempt++;
    if (guess < answer) {
      window.alert(`Too low try aggin`);
    } else if (guess > answer) {
      window.alert(`Too high try agin`);
    }
    else {
        window.alert(`Correct ! the answer was ${answer}`);
        runing = false;}
        
  }
}
console.log(attempt)
