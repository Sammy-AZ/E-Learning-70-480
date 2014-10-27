
var txtInput;
var txtResult;

var operator;



function initialize() {
    txtInput = document.getElementById('txtInput');
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click',
        numberClick, false);
    }
    txtResult = document.getElementById('txtResult');
    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnMultiply').addEventListener('click', multiplyClick, false);
    document.getElementById('btnDivide').addEventListener('click', divideClick, false);
    document.getElementById('btnCalculate').addEventListener('click', calculateClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);

    clear();
}
function numberClick() {
    txtInput.value = txtInput.value == '0' ?
    this.innerText : txtInput.value + this.innerText;
}
function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    operator = '+';
    clearEntry();
}
function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    operator = '-';
    clearEntry();
}
function multiplyClick() {
    if (txtInput.value != '0')
      txtResult.value = txtInput.value;
    operator = '*';
    clearEntry();
}
function divideClick() {
    if(txtInput.value != '0')
         txtResult.value = txtInput.value;
    operator = '/';
    clearEntry();
}
function calculateClick() {
   
    switch (operator) {
        case '*':
            txtResult.value = Number(txtResult.value) * Number(txtInput.value);
            break;
        case '/':
            txtResult.value = Number(txtResult.value) / Number(txtInput.value);
            break;
        case '+':
            txtResult.value = Number(txtResult.value) + Number(txtInput.value);
            break;
        case '-':
            txtResult.value = Number(txtResult.value) - Number(txtInput.value);
            break;
        default:
            break;
    }
    clearEntry();
}

function clearEntry() {
    txtInput.value = '0';
}
function clear() {
    txtInput.value = '0';
    txtResult.value = '0';
}
