let arrray_fav = []
ctn_result_search.addEventListener('click',(e)=>{
    if(e.target.className == "big"){
        let imagenes = llamar_lista_gif()
        let imagen = imagenes[e.target.id]
        console.log(imagen)
        template_big(imagen)
        // console.log("big Agrandar")
    }
    if(e.target.className == "like"){
        e.target.src = "assets/img/icon-fav-fav.svg"
        console.log(e.target.id)
        let id_gif = e.target.id
        let lista_array_gifos = llamar_lista_gif()
        let save = lista_array_gifos[`${id_gif}`]
        arrray_fav.push(save)
        localStorage.setItem('array-gif-favorite',JSON.stringify(arrray_fav))
    }

    if(e.target.className == "close-big"){
        let elemento_cerrar = document.getElementById('ampliar')
        // console.log(elemento_cerrar)
        document.body.removeChild(elemento_cerrar)
    }

   
})




ctn_result_search.addEventListener('click',async(e)=>{
    e.preventDefault()
    if(e.target.className == "download"){
        let img = e.target.parentElement
        let img_url = img.href
        // let imagenes = JSON.parse( localStorage.getItem(''))
        let a = document.createElement("a");
            let response = await fetch(img_url);
            let gif = await response.blob();
            a.download = 'Gif';
            a.href = window.URL.createObjectURL(gif);
            a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
            a.click();
    }
})






