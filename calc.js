const display = (value) => {
    document.getElementById("result").value += value;
}

const clearScreen = () => {
    document.getElementById("result").value = "";
}

const deleteTerm = () => {
    let curResult = document.getElementById("result").value

    document.getElementById("result").value = document.getElementById("result").value.slice(0,document.getElementById("result").value.length - 1)
}

const calculate = () => {
    let equOld = document.getElementById("result").value;
    let equNew = ""

    for (let i=0; i < equOld.length; i++) {
        if (equOld[i] == '\u00f7') {
            equNew += '/';
        } else if (equOld[i] == '\u00d7') {
            equNew += '*';
        } else if (equOld[i] == '\u03c0') {
            equNew += 'Math.PI';
        } else if (equOld[i] == '\u0025') {
            equNew += '/100';
        } else if (equOld[i] == 's') {
            equNew += 'Math.sin';
        } else if (equOld[i] == 'c') {
            equNew += 'Math.cos';
        } else if (equOld[i] == 't') {
            equNew += 'Math.tan';
        } else {
            equNew += equOld[i];
        }

    }

    let sol = parseFloat(eval(equNew).toFixed(6));
    if (sol > 100000000000) {
        sol = "Error: ANS \u2192 infinity"
    }
    document.getElementById("result").value = sol;
}


