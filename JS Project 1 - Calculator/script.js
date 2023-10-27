let display = document.getElementById("display");

function append(value) {
    if (display.innerText === '') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function del() {
    display.innerText = display.innerText.toString().slice(0,-1);
}

function reset() {
    display.innerText = '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
