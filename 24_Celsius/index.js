const text = document.getElementById('text');
const celsius = document.getElementById('celsius');
const faren = document.getElementById('faren');
const res = document.getElementById('res');

let temp

function convert(){
    if(faren.checked){
        // res.textContent = "A farenhait választotottad"
        temp = Number(text.value)
        temp = temp * 9/5 + 32
        res.textContent = temp.toFixed(1) + "°F"

    }
    else if(celsius.checked){
        // res.textContent = "A Celsiust választotottad"
        temp = Number(text.value)
        temp = (temp - 32) * (5/9)
        res.textContent = temp.toFixed(1) + "°C"


    }
    else {
        res.textContent = "Válasz!!"

    }

}