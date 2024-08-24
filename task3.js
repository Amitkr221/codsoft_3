function add1(value1) {
    let display = document.getElementById("display");
    display.value += value1;
}


function output() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


function clear1() {
    document.getElementById("display").value = "";
}


function del1() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}


