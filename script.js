
let textHolder = '';

function add (a, b) {
	return a + b;
};
function subtract (a, b) {
	return a - b;
};
function multiply (a,b) {
	return a * b;
};
function divide(a, b){
    return a / b;
};
function oprate(firstNum, operator, secondNum){
    if(operator == '+'){
        return add(firstNum, secondNum);
    }
    else if(operator == '-'){
        return subtract(firstNum, secondNum);
    }
    else if(operator == '*'){
        return multiply(firstNum, secondNum);
    }
    else if(operator == '/'){
        return divide(firstNum, secondNum);
    }
};
const display = document.getElementById('input');
let value = '';
const button = document.querySelectorAll('button');
let firstNum = 0;
let secondNum = 0;
let operator = ''
button.forEach((btn)=>{
    btn.addEventListener('click',()=> {
        value = btn.id;
        if(Number.isNaN(value)){
            if(display.textContent == '0'){
                display.textContent = value;
            }
            else{
                display.textContent += value;
            }
        }
        else{
            if(value == 'ac'){
                display.textContent = '0';
            }
            else if(value == '.'){
                if(display == '0'){
                    display.textContent = '0.';
                }
                else{
                    display.textContent += `.${value}`;
                }
            }
            else if(value == '='){
                display.textContent = '0';
            }
            else{
                display.textContent += value;
            }
        }

    
    })
})
console.log(display);