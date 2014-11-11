/// <reference path="_references.js" />

(function () {
    th.calculatorNameSpace = th.calculatorNameSpace || {};
    var ns = th.calculatorNameSpace;




    var operator;






    function initialize() {

        var calculator = new ns.Calculator();



        $('button[id^="btnNumber"]').on('click', calculator.numberClick);

        /*
        for (var i = 0; i < 10; i++) {
            document.getElementById('btn' + i).addEventListener('click',
            numberClick, false);
        }
        */


        // document.getElementById('btnPlus').addEventListener('click', plusClick, false);
        $('#btnPlus').on('click', calculator.plusClick);

        //document.getElementById('btnMinus').addEventListener('click', minusClick, false);
        $('#btnMinus').on('click', calculator.minusClick);

        //document.getElementById('btnMultiply').addEventListener('click', multiplyClick, false);
        $('#btnMultiply').on('click', calculator.multiplyClick);

        //document.getElementById('btnDivide').addEventListener('click', divideClick, false);
        $('#btnDivide').on('click', calculator.divideClick);

        // document.getElementById('btnCalculate').addEventListener('click', calculateClick, false);
        $('#btnCalculate').on('click', calculator.calculateClick);

        // document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
        $('#btnClearEntry').on('click', calculator.clearEntry);


        //document.getElementById('btnClear').addEventListener('click', clear, false);
        $('#btnClear').on('click', calculator.clear);
        clear();
    }

    ns.Calculator = (function () {


        function Calculator() {

        }


        Calculator.prototype.numberClick = function () {

            /*txtInput.value = txtInput.value == '0' ?
            this.innerText : txtInput.value + this.innerText;*/

            $('#txtInput').val($('#txtInput').val() == '0'?
                $(this).text()  : $('#txtInput').val + $(this).text()
                );
        };

        Calculator.prototype.plusClick = function () {

            calculateClick();
            operator = '+';
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.minusClick = function () {
            calculateClick();
            operator = '-';
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.multiplyClick = function () {
            /*
            if (txtInput.value != '0')
                txtResult.value = txtInput.value;*/

            if ($('#txtInput').val() != '0')
                $('#txtResult').val($('#txtInput').val());


            calculateClick();
            operator = '*';
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.divideClick = function () {


            /*
            if (txtInput.value != '0')
                txtResult.value = txtInput.value;
            operator = '/';
            clearEntry();*/

            if ($('#txtInput').val() != '0')
                $('#txtResult').val($('#txtInput').val());
            operator = '/';
            Calculator.prototype.clearEntry();
           
        };

        Calculator.prototype.calculateClick = function () {
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
        };

        Calculator.prototype.clearEntry = function () {
            $('#txtInput').val('0');

           // txtInput.value = '0';
        };


        Calculator.prototype.clear = function () {
/*
            txtInput.value = '0';
            txtResult.value = '0';*/
            $('#txtInput').val('0');
            $('#txtResult').val('0');
            
        };

        return Calculator;
    }());

})();
