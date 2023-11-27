let prezzoCommissione="";
let PrezzoFinaleScreen=document.getElementById('prezzoFinale');
let oreLavoro=document.getElementById("input0").value;
oreLavoro=parseInt(oreLavoro);

let Form=document.getElementById("form");
Form.addEventListener("submit",function(event) {
    event.preventDefault();
    let typeOfWork=document.getElementById('seleziona').value;
    console.log(typeOfWork);
    if(typeOfWork=="Front-end") {
        prezzoCommissione=oreLavoro;
        console.log(prezzoCommissione);
    }
    else if(typeOfWork=="Back-End") {
        prezzoCommissione=oreLavoro * 20.50;
    }
    else if(typeOfWork=="Project Analisys") {
        prezzoCommissione=oreLavoro * 33.60;
    }

})

PrezzoFinaleScreen.innerHTML=prezzoCommissione;