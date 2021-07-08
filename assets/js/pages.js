const btn_favorite = document.getElementById('btn-favorite')
const btn_mis_gif = document.getElementById('btn-gifs')

//contenedores
const favoritos = document.getElementById('favoritos');
const search = document.getElementById('search')
const sin_favorite = document.getElementById('sin-Favorite')
const container_show_favorite = document.getElementById('ctn-favoritos-guardados')


btn_favorite.addEventListener('click',()=>{
    btn_favorite.style.color = "grey"
    document.getElementById('img-crear-gif').src = "assets/img/button-crear-gifo.svg"
    btn_mis_gif.style.color = "#522ee5"
    btn_favorite.style.color = "grey"
    search.style.display = "none"
    favoritos.style.display = "flex";
    mis_gif.style.display = "none";
    ctn_upload.style.display = "none";
    const save_favorite = JSON.parse(localStorage.getItem('array-gif-favorite'))
        if(save_favorite != null){
            sin_favorite.style.display = "none"
            template_img(save_favorite,container_show_favorite)
        }
})

favoritos.addEventListener('mouseover',(e)=>{
    if(e.target.tagName == "IMG"){
        e.target.style.zIndex = "0" 
        setTimeout(()=>{
            e.target.style.zIndex = "5" 
        },1000)
    }
})
//mis gifs creados
const mis_gif = document.getElementById('mis-gifs');
const mis_less_gifs = document.getElementById('less-ctn-my-gif');
const img_upload = document.getElementById('img-upload')

btn_mis_gif.addEventListener('click',()=>{
    btn_favorite.style.color = "#522ee5"
    document.getElementById('img-crear-gif').src = "assets/img/button-crear-gifo.svg"
    btn_mis_gif.style.color = "grey"
    mis_gif.style.display = "flex";
    search.style.display = "none";
    favoritos.style.display = "none";
    ctn_upload.style.display = "none";
    let mis_gifos = JSON.parse(localStorage.getItem('gifos-upload'));
    if(mis_gifos != null){
        mis_less_gifs.style.display = "none"
        template_gifos_creados(mis_gifos,img_upload)
        style_hover()
    }
})

mis_gif.addEventListener('clicl',async (e)=>{
    e.preventDefault();
  if(e.target.className=="download"){
      const resp = await fetch(url);
      const gif = await resp.getBlob();
      gif.save()
      
    }
})
//crear gifos
const btn_add_upload = document.getElementById('btn-crear-gif');
const ctn_upload = document.getElementById('containerCrearGifos');

btn_add_upload.addEventListener('click',()=>{
    btn_mis_gif.style.color = "#522ee5"
    btn_favorite.style.color = "#522ee5"
    mis_gif.style.display = "none";
    search.style.display = "none";
    favoritos.style.display = "none";
    ctn_upload.style.display = "grid"
    document.getElementById('img-crear-gif').src = "assets/img/CTA-crear-gifo-active.svg"
})