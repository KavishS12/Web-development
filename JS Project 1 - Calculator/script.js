document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector("input[name='display']");
    const numButtons = document.querySelectorAll(".num");
    const opButtons = document.querySelectorAll(".op");

    numButtons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;
            display.value += value;
        });
    });

    opButtons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;
            if(display.value != ''){
                display.value += value;
            }
        });
    });

    const delButton = document.querySelector(".delButton");
    delButton.addEventListener("click", function() {
        display.value = display.value.slice(0, -1);
    });

    const resetButton = document.querySelector(".resetButton");
    resetButton.addEventListener("click", function() {
        display.value = '';
    });

    const equalButton = document.querySelector(".equalButton");
    equalButton.addEventListener("click", function() {
        display.value = eval(display.value);
    });
});
