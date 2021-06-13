const input_nav = document.getElementById('input-nav');
const ctn_input_nav = document.getElementById('ctn-input-nav');
window.addEventListener('scroll',()=>{
   let scroll =  window.scrollY;
    if(scroll > 350){
        ctn_input_nav.style.display = "flex";
    }else{
        ctn_input_nav.style.display = "none";
    }
    
})

