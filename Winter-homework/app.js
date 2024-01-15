console.log("Its working");

const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector('[equals]')
const deleteButton = document.querySelector('[delete]')
const allClearButton = document.querySelector('[all-clear]')
const previousOperandTextElement = document.querySelector('[previous-operand]')
const currentOperandTextElement = document.querySelector('[current-operand]')
const decimalButton = document.querySelector('[decimal]')

for (let i = 0; i < numberButtons.length; i++) {
  currentOperandTextElement.innerHTML = "";
  numberButtons[i].addEventListener("click", function () {
    currentOperandTextElement.innerHTML += numberButtons[i].value;
  });
}
for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", function () {
  if (previousOperandTextElement.innerHTML.includes("+", "-", "*", "/", "="))
  return;
  previousOperandTextElement.innerHTML += currentOperandTextElement.innerHTML + operationButtons[i].value;
  currentOperandTextElement.innerHTML = "";
});
}


equalsButton.addEventListener("click", function () {
  let previousNumber = parseFloat(previousOperandTextElement.innerHTML);
  let currentNumber = parseFloat(currentOperandTextElement.innerHTML);
  if (isNaN(previousNumber) || isNaN(currentNumber)) 
  return;
previousOperandTextElement.innerHTML = previousOperandTextElement.innerHTML + currentOperandTextElement.innerHTML;
currentOperandTextElement.innerHTML = "";
})

if (previousOperandTextElement.innerHTML.includes("+")) {
  currentOperandTextElement.innerHTML += previousNumber + currentNumber;
  previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML;
  previousOperandTextElement.innerHTML = "" ;
  

}
 if ( previousOperandTextElement.innerHTML.includes("-")) {
  currentOperandTextElement.innerHTML += previousNumber - currentNumber;
  previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML;
  previousOperandTextElement.innerHTML = "";
  
 }

 if ( previousOperandTextElement.innerHTML.includes("*")) {
  currentOperandTextElement.innerHTML += previousNumber * currentNumber;
  previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML;
  previousOperandTextElement.innerHTML = "";
  
 }
if ( previousOperandTextElement.innerHTML.includes("/")) {
  currentOperandTextElement.innerHTML += previousNumber / currentNumber;
  previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML;
  previousOperandTextElement.innerHTML = "";
  
}
decimalButton.addEventListener("click", function () {
  if (currentOperandTextElement.innerHTML.includes(".")) return;
  currentOperandTextElement.innerHTML += decimalButton.value;
})

allClearButton.addEventListener("click", function (){
  previousOperandTextElement.innerHTML = "";
  currentOperandTextElement.innerHTML = "";

})

deleteButton.addEventListener("click", function () {
  currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.slice(0, -1);
})



// Nemozam da si pronajdam sto mi e greskata ne mi izleguva rezultatot bas me namaci
