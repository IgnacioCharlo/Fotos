var img=document.getElementById('pic');
var count = 1;

var buttonPrevious = document.getElementById("b1");
buttonPrevious.addEventListener('click', event=> {
    prev();
});

var buttonNext = document.getElementById("b2");
buttonNext.addEventListener('click', event=> {
   next();
});

function next() {
    count++;
    buttonPrevious.disabled = false;
    if(count <= 5){
        currentPhoto(count);
        if(count===5){
            disable_if_bound();
        }
    }
}

function prev() {
    count--;
    buttonNext.disabled = false;
    if(count >= 1){
        currentPhoto(count);
        if(count===1){
        disable_if_bound();
        }
    }
}

function disable_if_bound (){
    if(count === 1){
        buttonPrevious.disabled = true;
    }
    else if(count === 5){
        buttonNext.disabled = true;
    }
}

function currentPhoto (number) {
    console.log("Numero foto:"+number);
    img.src='cros'+count+'.jpeg';
}

