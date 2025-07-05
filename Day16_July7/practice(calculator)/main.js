function press(number){
    const display = document.getElementById("display");
    display.value += number;
}
function calculate(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value);
    }catch(error){
        display.number = "error"
    }
}

function clearDisplay(){
    document.getElementById("display").value= "";
}