const sides = document.querySelectorAll(".input-side");
const areaBtn = document.querySelector("#Submit");
const showResult = document.querySelector("#result")

let links = document.querySelectorAll(".pages a");
let bodyId = document.querySelector("body").id;
 
for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}


areaBtn.addEventListener("click",validateSides);

function validateSides(){
    if(Number(sides[0].value) >0 && Number(sides[1].value) >0 )
    {   
        var area = calculateArea(Number(sides[0].value), Number(sides[1].value))
        showResult.innerText = "Area is "+ area+" square units.";

    }
    else{
        showResult.innerText = "Fill Both of them.."
    }
    
}

function calculateArea(base,height){
    var total = (base*height);
    total = total/2;
    total = total.toFixed(2);
    return total;
}
