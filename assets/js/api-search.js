
//Definir variables para trabajar estas funcionalidades
const input_search = document.getElementById('input-header');
const input_search_nav = document.getElementById('input-nav')
const button_seach_header = document.getElementById('button-search');
const ctn_result_search = document.getElementById('ctn-result-search');
const title_search = document.getElementById('title-search');
const ctn_tendencias = document.getElementById('ctn-tendencias');
const ctn_no_found =  document.getElementById('no-found');
const button_max = document.getElementById('button-max');
// function para hacer una peticion a la api
//crear style hover 
const style_hover = ()=>{
    let style =  document.styleSheets[2]
    for(let i = 0; i < 48 ;i++){
       style.addRule(`.hg${i}:hover > .img${i}`, "z-index:unset");
    }
};

//Guardar los resultados en un array para poder usarlos despues 
let array_result ;
const solicitud_api_search = (word)=>{
    ctn_result_search.innerHTML = ""
    const key_api = "HIz3J8JGmxviwwFQBAi9X5WTniL2kSkm";
    const url_search = `https://api.giphy.com/v1/gifs/search?api_key=${key_api}&q=${word}&limit=36&offset=0&rating=g&lang=es`
    fetch(url_search)
    .then(resp => resp.json())
    .then( (response) =>{
        ctn_tendencias.innerHTML = ""
        title_search.style.marginTop = "3rem"
        console.log(response.data)
        if(response.data.length>0){
                // console.log(response)
            ctn_suger.innerHTML = ""
            almacenar_gifs_local(response.data)
            array_result = response.data
            let array_slice = response.data.slice(0,12)
            template_img(array_slice,ctn_result_search )
            style_hover()
            let title = input_search.value;
            // console.log(array_slice)
            title_search.textContent = title;
            ctn_no_found.style.display = "none"
            button_max.style.display = "inline"
        }else{
            ctn_no_found.style.display = "flex"
            button_max.style.display = "none"
        }
    })
    .catch((err)=>{
            console.log(err)
    })
}

button_seach_header.addEventListener('click',async()=>{
    solicitud_api_search(input_search.value);
})
input_search.addEventListener('keyup',(e)=>{
    // console.log("funciona: "+ e.keyCode)
    if(e.keyCode == '13'){
            solicitud_api_search(input_search.value)
    }
})

//almacenar array de gif en local estoraje
const almacenar_gifs_local = (array)=>{
    let  list = array.reduce((acc,el)=>({
        ...acc,
        [el.id]:el,
    }),{}
    )
    try{
        localStorage. setItem('array-gif-search',JSON.stringify(list))
        console.log("guardado exitoso")
    }catch(err){
        console.error("error en guardar gifos en local storage "+ err)
    }
}

//llamar a lista de gif guardados
const llamar_lista_gif = ()=>{

    return JSON.parse(localStorage.getItem('array-gif-search'))

}

