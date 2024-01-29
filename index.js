    //Obtener los elementos con dom
    const resultadoLabel = document.querySelector(".calculadora__resultado");
    const buttons = document.querySelectorAll(".calculadora__button");
    
    //Variable para almacenar los numeros y operaciones
    let currentNumber = "";
    let previousNumber = "";
    let currentOperator = "";

    //Funcion para actualizar el resultado en el label
    const updateResult = ()=> {
        resultadoLabel.textContent = currentNumber;
    }

    //Funcion para realizar la operacion matematica
    const calculate = () => {
        const num1 = parseFloat(previousNumber);
        const num2 = parseFloat(currentNumber);

        //Realizar la operacion segun el operadot seleccionado
        switch (currentOperator) {
            case '+':
                currentNumber = num1 + num2;
                break;
            case '-':
                currentNumber = num1 - num2;
                break;
            case '/':
                    currentNumber = num1 / num2;
                break;
            case 'x':
                 currentNumber = num1 * num2;
                break;
        }

        //Convertir nuevamente el resultado de nuevo a una cadena

        currentNumber = currentNumber.toString();
    };

    //Event Listener para los botones 

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
    
            // Verificar que el botón sea un número
            if (button.classList.contains('data--number')) {
                currentNumber = currentNumber + value;
                updateResult();
            } else if (value === '=') {
                calculate();
                updateResult();
    
                currentNumber = "";
                previousNumber = "";
            // Verificar si el botón es el de limpiar C
            } else if (value === 'AC') {
                // Limpiar todas las variables 
                currentNumber = "";
                previousNumber = "";
                updateResult();
                resultadoLabel.textContent = 0;
            } else {
                previousNumber = currentNumber;
                currentNumber = '';
                currentOperator = value;
            }
        });
    });
    