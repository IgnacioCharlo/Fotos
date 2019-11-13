var img=document.getElementById('pic');

var buttonPrevious = document.getElementById("b1");
buttonPrevious.addEventListener('click', event=> {
    movePhoto(0);
});

var buttonNext = document.getElementById("b2");
buttonNext.addEventListener('click', event=> {
    movePhoto(1);
});


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
        console.log(count);
        if(count === 5){
            document.getElementById("b1");
            inputbutton.disabled=false;
        }
    }
    else if (direccion == 0){
        count--;
        img.src='cros'+count+'.jpeg';
        console.log(count);
        if (count === 1){
            document.getElementById("b1");
            inputbutton.disabled= false;
        }
    }
    else{
        console.log("ERROR con count");
    }
}

