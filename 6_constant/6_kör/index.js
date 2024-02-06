let pi = 3.14159
let radius
let circumference

// radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);
// circumference = 2 * pi * radius;



console.log(circumference); 

document.getElementById("sb").onclick = function(){
 radius = document.getElementById("text").value;
 radius = Number(radius);
 circumference = 2 * pi * radius;
 document.getElementById("h3").textContent = circumference + "cm";

}


