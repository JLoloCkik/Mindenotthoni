const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum ;
const sub = document.getElementById("sub");
const text = document.getElementById("text");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const reset = document.getElementById("reset");

let próbálkozás = 0
let Tipp;


reset.onclick = function () {
  const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum  ;
  
  console.log(answer + (" gondoltam"));
}
 

sub.onclick = function () {

 

  text.textContent = Tipp;

  Tipp = document.getElementById("text").value;
  Tipp = Number(Tipp);
  próbálkozás = Number(próbálkozás);

  if (isNaN(Tipp)) {
    h1.textContent = `Á Á Á számot adj meg csak is számot😉!`;
  }
  else if (Tipp > maximum || Tipp < minimum ){
    h1.textContent = `Érvénytelen ${minimum} és ${maximum} közötti szá kell!`;
  }
  else if (Tipp < answer) {
    h1.textContent = ` ${Tipp}-nél/nál nagyobb számra gondoltam!😉`;
    próbálkozás ++
    h2.textContent = próbálkozás
  }
  else if (Tipp > answer) {
    h1.textContent = ` ${Tipp}-nél/nál kisebb számra gondoltam!😉`;
    próbálkozás ++
    h2.textContent = próbálkozás
  }
  else  {
    h1.textContent = `Szép volt kitaláltad a ${answer} számot😊!`};
  
 



  console.log(Tipp);
  console.log(próbálkozás)
};

console.log(answer + (" gondoltam"));
