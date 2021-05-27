
let textHolder = '';
let num = 0;
function add (a, b) {
	return a + b;
};
function subtract (a, b) {
    if(a === 0){
        return -b
    }
	return a - b;
};
function multiply (a,b) {
	return a * b;
};
function divide(a, b){
    if(a === 0){
        return "ERROR"
    }
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
        if(!Number.isNaN(Number.parseInt(value)) || value == '.'){
            if(firstNum === 0 && secondNum === 0){
                if(display.textContent == '0'){
                    if(value === '.'){
                        display.textContent = `0${value}`;
                    }
                    else{
                        display.textContent = value;
                    }
                }
                else{
                    display.textContent += value;
                }
            }
            else if(secondNum === 0){
                if(display.textContent == '0'){
                    if(value === '.'){
                        display.textContent = `0${value}`;
                        secondNum = parseFloat(display.textContent);
                    }
                    else{
                        display.textContent = value;
                        secondNum = parseFloat(display.textContent);
                    }
                }
                else{
                    display.textContent += value;
                    secondNum = parseFloat(display.textContent)
                }
            }
            else{
                display.textContent += value;
                secondNum = parseFloat(display.textContent)
            }
        }
        else if(value == 'ac'){
            display.textContent = '0';
            firstNum = 0;
            secondNum = 0;
            operator = '';
        }
        else{
            if(value == '+' || value == '-' || value == '/' || value == '*'){
                if(operator === value && secondNum === 0){
                    display.textContent = oprate(firstNum, operator, firstNum);
                    secondNum = 0;
                    firstNum = parseFloat(display.textContent);
                }
                else if(operator === value ){
                    display.textContent = oprate(firstNum, operator, secondNum);
                    secondNum = 0;
                    firstNum = parseFloat(display.textContent);
                }
                else if(secondNum === 0){
                    operator = value;
                    firstNum = parseFloat(display.textContent);
                    display.textContent = '0';
                }
                // else if(!operator == ''){
                //     operator = value;
                //     secondNum = firstNum;
                //     firstNum = oprate(firstNum, operator, secondNum);
                //     display.textContent = firstNum;
                // }
                else{
                    display.textContent = oprate(firstNum, operator, secondNum);
                    secondNum = 0;
                    firstNum = parseFloat(display.textContent);
                    display.textContent = '0';
                }
            }
            else if(value = '='){
                display.textContent = oprate(firstNum, operator, secondNum);
                firstNum = parseFloat(display.textContent);
                secondNum = 0;
                operator = '';
            }
        }
    })
})