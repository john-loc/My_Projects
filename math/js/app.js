var numberArray = [];
var input = document.getElementById("numberInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("button1").click();
    }
  });
//   create a function to add user data to an array
function numberPush(){
    //get value from the input text numberInput
    var numberInput = document.getElementById('numberInput').value;
    //append the user data to the array
    numberArray.push(numberInput);
    var pushValue = "";
    for(i = 0; i < numberArray.length; i++)
    {
        pushValue = pushValue + numberArray[i] + "  ";
    }
    //display the array to the user
    document.getElementById('arrayValues').innerHTML = pushValue;
    document.getElementById('numberInput').value = "";
}
// create a function to clear the data in the array
function clearArray(){
    numberArray.length = 0;
    document.getElementById('arrayValues').innerHTML = "";
}

function maxNumber(){
   var maxNumber = Math.max.apply(null, numberArray);
   document.getElementById('maxNumber').innerHTML = maxNumber;
}

function minNumber(){
    var minNumber = Math.min.apply(null, numberArray);
    document.getElementById('minNumber').innerHTML = minNumber;
}

function sum(){
   var numberSum = numberArray.map(Number).reduce(function(a, b){
       return (a + b);
   }, 0);
    document.getElementById('arraySum').innerHTML = numberSum;
}
