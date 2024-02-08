const c =document.getElementById("c");
const visa =document.getElementById("visa");
const master =document.getElementById("master");
const paypal =document.getElementById("paypal");
const submint =document.getElementById("submint");
const sub =document.getElementById("sub");
const pay =document.getElementById("pay");

submint.onclick = function() {

if(c.checked){
    sub.textContent = 'You are subscription ez az 1 es feltátel'

}
else{
    sub.textContent = 'You not are subscription ez az ha nem sikerül az egyes feltátel'
}
if(visa.checked){
    pay.textContent = 'You are paypal ez az vias'
}
else if (master.checked) {
    pay.textContent = 'You are paypal ez az master'

}
else if (paypal.checked) {
    pay.textContent = 'You are paypal ez az paypal'

}
else{
    pay.textContent = 'Select baszod'
}
}