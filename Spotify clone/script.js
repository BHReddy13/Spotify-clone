let audioelement=new Audio('Apna.mp3');
let masterplay=document.getElementById('playbutton');
masterplay.addEventListener('click',played());

function played(){
    if(audioelement.paused){
        audioelement.play();
        //masterplay.classList.remove('fa-circle-play');
        
    }
    else{
        audioelement.pause();
       // masterplay.classList.add('fa-regular fa-circle-play');
    }
    
}
