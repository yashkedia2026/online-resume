let inputOne;
let inputTwo;
let output=document.getElementById('output');
let result;

function addition(){
    inputOne = document.getElementById('inputOne').value;
    inputTwo = document.getElementById('inputTwo').value;
    result = String(Number(inputOne)+Number(inputTwo));
    updateOutput(result);
}
function subtraction(){
    inputOne = document.getElementById('inputOne').value;
    inputTwo = document.getElementById('inputTwo').value;
    result = String(Number(inputOne)-Number(inputTwo));
    updateOutput(result);
}
function multiplication(){
    inputOne = document.getElementById('inputOne').value;
    inputTwo = document.getElementById('inputTwo').value;
    result = String(Number(inputOne)*Number(inputTwo));
    updateOutput(result);
}
function division(){
    inputOne = document.getElementById('inputOne').value;
    inputTwo = document.getElementById('inputTwo').value;
    result = String(Number(inputOne)/Number(inputTwo));
    updateOutput(result);
}
function power(){
    inputOne = document.getElementById('inputOne').value;
    inputTwo = document.getElementById('inputTwo').value;
    inputOne = Number(inputOne);
    inputTwo = Number(inputTwo);
    let val = 1;
    for (let i=0; i<inputTwo; i++){
        val = inputOne * val;
    }
    result = String(val);
    updateOutput(result);
}
function clearVal(){
    inputOne = document.getElementById('inputOne');
    inputTwo = document.getElementById('inputTwo');
    inputOne.value = "";
    inputTwo.value= "";
    output.innerHTML = "";
}

function updateOutput(result){
    output.innerHTML = result;
    if(Number(result)<0){
        output.style.color = 'red';

    }
    else{
        output.style.color = 'black';
    }
}