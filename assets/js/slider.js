const ctn_slider = document.getElementById('ctn-sliders');
const slider_left = document.getElementById('slider-left');
const slider_right = document.getElementById('slider-right')

//apenas cargue la pagina se muestra los gifos
window.addEventListener('load',()=>{
    const key_api = "paxbaUAeLHNlziQWgIrcTQkCKymSswzo";
    const url_trending = `https://api.giphy.com/v1/gifs/trending?api_key=${key_api}&limit=10&offset=0&rating=g&lang=es`
    fetch(url_trending)
    .then(res=> res.json())    

    .then((resp)=>{
        template_img(resp.data,ctn_slider)
        let  list = resp.data.reduce((acc,el)=>({
            ...acc,
            [el.id]:el,
        }),{}
        )
        try{
            localStorage. setItem('array-gif-slider',JSON.stringify(list))
            console.log("guardado exitoso")
        }catch(err){
            console.error("error en guardar gifos en local storage "+ err)
        }
        // style_hover()
    })

})

ctn_slider.addEventListener('mouseover',(e)=>{
    if(e.target.tagName == "IMG"){
        e.target.style.zIndex = "0" 
        setTimeout(()=>{
            e.target.style.zIndex = "5" 
        },1000)
    }
})

ctn_slider.addEventListener('click',(e)=>{
    console.log(e.target.className)
    if(e.target.className == "big"){
        let imagenes = JSON.parse(localStorage.getItem('array-gif-slider'));
        let imagen = imagenes[e.target.id]
 
        template_big(imagen)
    }
    if(e.target.className == "like"){
        e.target.src = "assets/img/icon-fav-fav.svg"

        let id_gif = e.target.id
        console.log(id_gif)
        let lista_array_gifos = JSON.parse(localStorage.getItem('array-gif-slider'));
        let save = lista_array_gifos[id_gif]
        arrray_fav.push(save)
        localStorage.setItem('array-gif-favorite',JSON.stringify(arrray_fav))
    }
  
})
document.body.addEventListener('click',(e)=>{
    if(e.target.className == "close-big"){
        let elemento_cerrar = document.getElementById('ampliar')
  
        document.body.removeChild(elemento_cerrar)
    } 
})
ctn_slider.addEventListener('click',async(e)=>{
    e.preventDefault()
    if(e.target.className == "download"){
        let img = e.target.parentElement
        let img_url = img.href
    
        let a = document.createElement("a");
            let response = await fetch(img_url);
            let gif = await response.blob();
            a.download = 'Gif';
            a.href = window.URL.createObjectURL(gif);
            a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
            a.click();
    }
})

let left = 0;
slider_left.addEventListener('click',()=>{
    if(left != -2000){
        let elements = ctn_slider.children
        left += -200
        for(let q=0;q<elements.length;q++){
            elements[q].style.transform =`translateX(${left}px)`
            
        }
    }
})

slider_right.addEventListener('click',()=>{
    if(left !=0 ){
        let elements = ctn_slider.children
        left += 200
        for(let q=0;q<elements.length;q++){
            elements[q].style.transform =`translateX(${left}px)`
        }
    }
})
let withd_screen = window.screen.width;
let refence_screen = withd_screen / 2;

ctn_slider.addEventListener('touchstart',(e)=>{
    console.log(e.targetTouches[0].clientX)
    if(e.targetTouches[0].clientX > refence_screen){
        if(left != 0 ){
            let elements = ctn_slider.children
            left += 200
            for(let q=0;q<elements.length;q++){
                elements[q].style.transform =`translateX(${left}px)`
            }
        }
    }
    if(e.targetTouches[0].clientX < refence_screen){
         if(left != -2000 ){
        let elements = ctn_slider.children
        left += -200
        for(let q=0;q<elements.length;q++){
            elements[q].style.transform =`translateX(${left}px)`
        }
    }
    }

})
slider_left.addEventListener('mouseover',()=>{
    slider_left.src = "assets/img/button-slider-left-hover.svg";
});

slider_left.addEventListener('mouseout',()=>{
    slider_left.src = "assets/img/button-slider-left.svg";
});

slider_right.addEventListener('mouseover',()=>{
    slider_right.src = "assets/img/Button-Slider-right-hover.svg";
});

slider_right.addEventListener('mouseout',()=>{
    slider_right.src = "assets/img/Button-Slider-right.svg";
});