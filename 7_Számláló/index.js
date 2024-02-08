const d = document.getElementById("d");
const reset = document.getElementById("reset");
const i = document.getElementById("i");
const label = document.getElementById("label");
let szám = 0;
console.log(szám)

i.onclick = function () {
  szám++;
  label.textContent = szám;
};

d.onclick = function () {
  szám--;
  label.textContent = szám;
};

reset.onclick = function () {
  szám = 0;
  label.textContent = szám;
};
