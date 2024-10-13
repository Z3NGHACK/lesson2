const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const smallimg = document.getElementsByClassName("smallimg");
const pro = document.getElementsByClassName("pro");
const group = document.getElementsByClassName("single-pro-image");

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}


for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
        MainImg.src = smallimg[i].src;
    }
}
