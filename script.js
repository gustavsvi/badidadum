const redCircle = document.getElementById('red');
const yellowCircle = document.getElementById('yellow');
const greenCircle = document.getElementById('green');

let redOn = false;
let yellowOn = false;
let greenOn = false;

function CircleClick(color){
    if(color == 'red'){
        if(redOn){
            redCircle.style.backgroundColor = 'gray';
            //redOn = false;
        } else {
            redCircle.style.backgroundColor = 'red';
            //redOn = true;
        }
    } else if(color == 'yellow'){
        if(yellowOn){
            yellowCircle.style.backgroundColor = 'gray';
            yellowOn = false;
        } else {
            yellowCircle.style.backgroundColor = 'yellow';
            yellowOn = true;
        }
    } else if(color == 'green'){
        if(greenOn){
            greenCircle.style.backgroundColor = 'gray';
            greenOn = false;
        } else {
            greenCircle.style.backgroundColor = 'green';
            greenOn = true;
        }
    }
}

function OnMouseEnter(aplis){
    aplis.style.backgroundColor = 'white';
    aplis.style.width = '120px'
    aplis.style.height = '120px'
}

function OnMouseLeave(aplis){
    aplis.style.BackgroundColor = 'purple';
    aplis.style.width = '100px'
    aplis.style.height = '100px'
}