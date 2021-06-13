document.body.addEventListener('mouseover',(e)=>{
    if(e.target.className == "like"){
        e.target.src = "assets/img/icon-fav-hover.svg"
    }
    if(e.target.className == "big"){
        e.target.src = "assets/img/icon-max-hover.svg"
    }
    if(e.target.className == "download"){
        e.target.src = "assets/img/icon-download-hover.svg"
    }
 
 })
document.body.addEventListener('mouseout',(e)=>{
    if(e.target.className == "like"){
        e.target.src = "assets/img/icon-fav.svg"
    }
    
    if(e.target.className == "big"){
        e.target.src = "assets/img/icon-max-normal.svg"
    }
    if(e.target.className == "download"){
        e.target.src = "assets/img/icon-download.svg"
    }
 
 })

