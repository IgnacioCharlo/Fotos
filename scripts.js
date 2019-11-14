var img=document.getElementById('pic');
var inputbutton=document.getElementById('b1');
var inputbutton=document.getElementById('b2');
var buttonPrevious = document.getElementById("b1");
buttonPrevious.addEventListener('click', event=> {
    disable_if_bound(0);
});

var buttonNext = document.getElementById("b2");
buttonNext.addEventListener('click', event=> {
    disable_if_bound(1);
});

function disable_if_bound (direccion){
    if(direccion === 1){
        if(count === 5){
            document.getElementById("b1");
            inputbutton.disabled=false;
            console.log(count);
        }
        else movePhoto(direccion);
    }
    else{
        if (count === 1){
            document.getElementById("b1");
            inputbutton.disabled= false;
            console.log(count);
        }
        else movePhoto(direccion);
    }
}

//Direccion = 1 --> NEXT
//Direccion = 0 --> PREVIOUS
count =1;
console.log("Fuera de la funcion, count =  " + count);
function movePhoto (direccion) {
    console.log("Dentro de la funcion, count =  " + count);
    var img=document.getElementById('pic');
    if(direccion == 1){
        count++; 
        img.src='cros'+count+'.jpeg';    
    }
    else if (direccion == 0){
        count--;
        img.src='cros'+count+'.jpeg';
    }
    else{
        console.log("ERROR con count");
    }
}

