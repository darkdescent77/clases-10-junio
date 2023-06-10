const array = ["peras", "manzanas", "platanos"]

let frutas = document.getElementById("frutas");

array.map((element) => {
     frutas.innerHTML+=`<p>${element}</p>`;
})


