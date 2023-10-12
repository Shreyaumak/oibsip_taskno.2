document.querySelector('.crss').style.display ='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle("sidebargo") ;
    if( document.querySelector('.sidebar').classList.contains("sidebargo") ){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.crss').style.display ='none'
    }
    else{
        document.querySelector('.ham').style.display ='none'
        setTimeout(() => {
            document.querySelector('.crss').style.display = 'inline'
        },350);
    }

})