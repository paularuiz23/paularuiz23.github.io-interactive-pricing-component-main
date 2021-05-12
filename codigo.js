const rango = document.querySelector(".rango");
const view = document.querySelector("#view");
const valor = document.querySelector("#valor");
let switchP = document.querySelector("#switchP");

function views (){
    if(rango.value == "0"){
        view.textContent = "hola";
    }
}
/*function Views (){
    if(rango.value == "0"){
        view.textContent = "10K";
        valor.textContent = "8";
    }else if(rango.value == "25"){
        view.textContent = "50K";
        valor.textContent = "12";
    }else if(rango.value == "50"){
        view.textContent = "100K";
        valor.textContent = "16";
    }else if(rango.value == "75"){
        view.textContent = "500K";
        valor.textContent = "24";
    }else if(rango.value == "100"){
        view.textContent = "1M";
        valor.textContent = "36";
    }
}*/

rango.addEventListener("input",function (){
    let x = rango.value;
    //let color = "linear-gradient(90deg, rgb(184, 250, 243)" + x + "%, silver" + x + "%)";
    let color = `linear-gradient(90deg, rgb(184, 250, 243) ${x}%, silver ${x}%)`;
    rango.style.background = color;

    views ()
});

switchP.addEventListener("input",function (){
    if (switchP.checked == true){
        let x = valor.textContent*0.25;
        valor.textContent = valor.textContent - x;
    }else{
        views ()
    }

    
})