let button = document.querySelectorAll('button');
button[3].addEventListener('click' , btnColors)

// localStorage.clear()
pocetak();

function pocetak (){
    if (localStorage.length == 0) {
       btnColors();
    } else {
       color();
    }
}

// F U N K C I J E

function btnColors(){
    x = prompt('Please, select your class: Primary, Secondary, Success, Danger, Warning, Info, Light, Dark or Link');
    if (x == 'Primary' || x == 'primary' || x == 'Secondary' || x == 'secondary' || x == 'Success' || x == 'success' || x == 'Danger' || x == 'danger' || x == 'Warning' || x == 'warning' || x == 'Info' || x == 'info' || x == 'Light' || x == 'light' || x == 'Dark' || x == 'dark' || x == 'Link' || x == 'link') {
        localStorage.setItem('klasa', x.toLowerCase());
        start();
    } else {
        alert('This is not a rule entered class!!!');
        btnColors();
    }
}

function start(){
    for (let i = 0; i < button.length; i++) {
        button[i].className = 'btn btn-' + x.toLowerCase();
    }
}

function color(){
    for (let k = 0; k < button.length; k++) {
        button[k].className = 'btn btn-' + localStorage.getItem('klasa');
    }
}





