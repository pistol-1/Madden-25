function inputValue(value) {
    document.getElementById('display').value += value;
}

function reset() {
    document.getElementById('display').value = '';
}

function borrar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calcularresultado() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function percentaje() {
    let display = document.getElementById('display').value;
    if (display) {
        let value = eval(display);
        document.getElementById('display').value = value / 100;
    }
}



