function isOddOrEven(num) {
    return num % 2 === 0 ? "even" : "odd";
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;
     
    const num1OddEven = isOddOrEven(num1);
    const num2OddEven = isOddOrEven(num2);

    
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
        default:
            result = "Invalid operator";
    } 
    document.getElementById("result").innerHTML = `num 1 is ${num1OddEven}, num 2 is ${num2OddEven}.<br>Result is ${num1} ${operator} ${num2} = ${result}`;
}