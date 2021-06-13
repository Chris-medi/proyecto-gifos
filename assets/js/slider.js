const ctn_slider = document.getElementById('ctn-sliders')



window.addEventListener('load',()=>{
    const key_api = "HIz3J8JGmxviwwFQBAi9X5WTniL2kSkm";
    const url_trending = `https://api.giphy.com/v1/gifs/trending?api_key=${key_api}&limit=10&offset=0&rating=g&lang=es`

    fetch(url_trending)
    .then(res=> res.json())    
    .then((resp)=>{
        template_img(resp.data,ctn_slider)
        // style_hover()

    })

})

ctn_slider.addEventListener('mouseover',(e)=>{
    if(e.target.tagName == "IMG"){
        console.log(e.target)
        e.target.style.zIndex = "0" 
        setTimeout(()=>{
            e.target.style.zIndex = "5" 
        },3000)
    }
})


