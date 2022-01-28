var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');


for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        switch (btntext) {
            case '×':
                btntext = '*';
                break;
            case '÷':
                btntext = '/';
                break;
            case 'mod':
                btntext = '%';
                break;

        }
        screen.value += btntext;
    });
}


function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}


function pow() {
    screen.value = Math.pow(screen.value, 2);
}



function sqrt() {
    screen.value = Math.sqrt(screen.value, 1 / 2);
}

function exp() {

    screen.value = Math.exp(screen.value);

}

function pi() {
    if (screen.value == 0) {
        screen.value = 3.14;
    } else {
        screen.value = screen.value * Math.PI;
    }
}

function log() {
    screen.value = Math.log10(screen.value);
}

function ln() {
    screen.value = Math.log(screen.value);
}

function fact() {
    var i, num, f;
    if (screen.value == 0) {
        f = 0;
    } else {
        f = 1;
    }
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;

    screen.value = f;
}


function divide() {
    screen.value = 1 / screen.value;
}

function powx() {
    screen.value = 10 ** screen.value;
}

function negpos() {

    if (screen.value == 0) {
        screen.value = '-';
    } else {
        screen.value = screen.value * -1;
    }
}


function e() {
    if (screen.value == 0) {
        screen.value = Math.E;
    } else {
        screen.value = screen.value * Math.E;
    }
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function cot() {
    screen.value = Math.cot(screen.value);
}



function fe() {
    var num = parseInt(screen.value);
    screen.value = num.toExponential();

}


