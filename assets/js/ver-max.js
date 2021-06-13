// const button_max = document.getElementById('button-max');
const button_less = document.getElementById('button-less');

 
// button_seach_header.addEventListener('click',()=>{
//     // if(elements_gif > 0 && elements_gif < 36){
//         button_max.style.display = "inline"
        
//     })
    
//     input_search.addEventListener('keyup',(e)=>{
//         if(e.keyCode == "13"){
//             button_max.style.display = "inline"

//         }    
//     })
    
button_max.addEventListener('click',()=>{
    let elements_gif = ctn_result_search.children.length
    if(elements_gif < 26 ){
        //llamo al array donde se guardaron los dato de peticion de la busquedad
        let sumar_mas = array_result.slice(elements_gif,(elements_gif + 12))
        template_img(sumar_mas,ctn_result_search)
    }
    if(elements_gif > 23){
        button_max.style.display = "none";
        button_less.style.display = "inline"
    }
})



button_less.addEventListener('click',()=>{
        let elements = ctn_result_search.children;
        if(elements.length >11 ){
            for(let h = 0; h < 12 ; h++){
                ctn_result_search.removeChild(elements[h])
            }
        }
        if(elements.length < 23 ){
            button_less.style.display = "none"
            button_max.style.display = "inline"
        }
})