
var img=document.getElementById('pic');

var buttonNext = document.getElementById("b1");
buttonNext.addEventListener('click', event=> {
    movePhoto(1);
});
var buttonPrevious = document.getElementById("b2");
buttonPrevious.addEventListener('click', event=> {
    movePhoto(0);
});

count =0;  
function movePhoto (derecha) {
    var img=document.getElementById('pic');
    if(derecha == 1){
        count++;
        img.src='cros'+count+'.jpeg';
    }
    else{
        count--;
        img.src='cros'+count+'.jpeg';
    }
}

