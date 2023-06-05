
window.onload = function(){
    document.addEventListener('scroll', logoAppear);
    document.getElementById('linkLogo').addEventListener('click', play);
}

function logoAppear(){

    let scrollY = window.scrollY;
    let scrollX = window.scrollX;

    //console.log(scrollY);
    if(scrollY > 7){
        document.getElementById('linkLogo').setAttribute('style', 'display:flex');
    }else {
        document.getElementById('linkLogo').setAttribute('style', 'display:none');
    }
}

function play(){
    document.getElementById('audio').play();
}