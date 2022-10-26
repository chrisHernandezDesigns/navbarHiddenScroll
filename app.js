let prevScrollPos = window.pageYOffset;
let header = document.getElementById('navbar') //selecting navbar
let btns = document.getElementsByClassName('btn'); //selecting buttons

for(var i =0; i < btns.length; i++){ // for loop to get all btns then adding active class
    btns[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}


window.onscroll = function() { //id navbar and to disappear with scroll
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
}