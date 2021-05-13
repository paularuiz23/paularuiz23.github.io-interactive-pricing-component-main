const slider = document.querySelector(".rango");
const pageViews = document.querySelector("#views");
const price = document.querySelector("#val");
let promoSwitch = document.querySelector("#switch");

function printPageViews (){
    if(slider.value == "0"){
        pageViews.textContent = "10K";
        price.textContent = "8";
    }else if(slider.value == "25"){
        pageViews.textContent = "50K";
        price.textContent = "12";
    }else if(slider.value == "50"){
        pageViews.textContent = "100K";
        price.textContent = "16";
    }else if(slider.value == "75"){
        pageViews.textContent = "500K";
        price.textContent = "24";
    }else if(slider.value == "100"){
        pageViews.textContent = "1M";
        price.textContent = "36";
    };
};

slider.addEventListener("input",function (){
    let x = slider.value;
    //let color = "linear-gradient(90deg, rgb(184, 250, 243)" + x + "%, silver" + x + "%)";
    let color = `linear-gradient(90deg, rgb(184, 250, 243) ${x}%, silver ${x}%)`;
    slider.style.background = color;

    printPageViews ();
    
    if (promoSwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent - x;
        console.log(x);
    }else{
        printPageViews ();
    };
});

promoSwitch.addEventListener("input",function (){
    if (promoSwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent - x;
        console.log(x);
    }else{
        printPageViews ();
    };
})