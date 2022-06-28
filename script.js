var selectElement;
var displayElement;

function openFunction() {
     selectElement = document.getElementById("toSelect").value;
     displayElement = document.getElementById('display-value');
}


var btnElement = document.getElementById("submit-btn");
btnElement.addEventListener('click',btnActionElement);
function btnActionElement() {
    if (selectElement == "open") {
        displayElement.innerHTML = "we are " + selectElement;
    }
    else if (selectElement == "closed"){
        displayElement.innerHTML = "we are " + selectElement;
    }
    else{
     displayElement.innerHTML = '';
    }
}





