const ctn_suger = document.getElementById('ctn-suger')
const container_input = document.getElementById('container-input')
const imprimir_suger = (array)=>{
    array.forEach((element) => {
        if(ctn_suger.childElementCount <5){

            let div = document.createElement('div')
    
            let img = document.createElement('img');
            img.src = "assets/img/icon-search-sgn.svg"
            img.className = "img-suger"
    
            let span = document.createElement('span')
            span.className = "suger"
            span.textContent = element.name;
            div.appendChild(img);
            div.appendChild(span);
    
            ctn_suger.appendChild(div);
        }else{
            ctn_suger.innerHTML = ""
        }
    })

}

const api_sugerencia = (item)=>{
    const key_api = "HIz3J8JGmxviwwFQBAi9X5WTniL2kSkm";
    fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${key_api}&q=${item}&limit=5`)
    .then(res=> res.json())
    .then(response =>{
        // console.log(response)
        imprimir_suger(response.data)
    })
}

input_search.addEventListener('input',()=>{
    let close = document.createElement('img')
    close.src = "assets/img/close.svg"
    close.className="close-suger"
    if(ctn_suger.childElementCount <= 5){
        api_sugerencia(input_search.value);
    }else{
        
        ctn_suger.innerHTML = ""
    }
    if(input_search.value.length >=1){
        ctn_suger.style.border = "solid 1px #572EE5";
        ctn_suger.style.borderTop = "none"
        ctn_suger.style.borderRadius = "0 0 25px 25px"
        document.getElementById('input-header').style.borderRadius = " 25px 15px 0 0 "
        document.getElementById('input-header').style.borderBottom = "none"
        button_seach_header.style.left = "1.5rem";
        button_seach_header.style.right = "unset";
        container_input.appendChild(close);
        estabilizar_icon_close();
    }else{
        ctn_suger.innerHTML = ""
        document.getElementById('input-header').style.borderBottom = "1px solid #572EE5"
        ctn_suger.style.border = "none"
        document.getElementById('input-header').style.borderRadius = " 25px"
        button_seach_header.style.left = "unset";
        button_seach_header.style.right = "15px";
        eliminar_icon_close();
    }
})
//
let _focus = 0;
input_search.addEventListener('keyup',(e)=>{
    console.log(e.key);
    let child_suger = ctn_suger.children;
    if(_focus > child_suger.length-1){
        _focus = 0;
        child_suger[0].style.background = "grey"
    }
    if(e.key == "ArrowUp" && child_suger.length > 1 && _focus > 0 ){
        _focus--
        child_suger[_focus].style.background = "grey"
        child_suger[_focus+1].style.background = "#fff";
        // console.log(child_suger[1])
        // child_suger[_focus+1].style.background = "#fff";
    }
    if(e.key == "ArrowDown" && child_suger.length > 1 && _focus <= 5){
        _focus++
        child_suger[_focus].style.background = "grey"
        child_suger[_focus-1].style.background = "#fff";
        // child_suger[_focus-1].style.background = "#fff";
        // console.log(child_suger)
    }
    input_search.value = child_suger[_focus].textContent

})





//estabilizar objeto close en sugerencias
const estabilizar_icon_close= ()=>{
    if(container_input.childElementCount > 3){
        container_input.removeChild(container_input.lastChild);
    }
}
const eliminar_icon_close = ()=>{
    let number_children = container_input.children.length
    if(container_input.childElementCount >= 3){
        for(let i = 2; i < number_children ;i++){
            container_input.removeChild(container_input.children[i])
        } 
    }
}


//selecionar elementos

ctn_suger.addEventListener('click',(e)=>{
    if(e.target.className =="suger"){
        input_search.value = e.target.textContent
    }
})

document.body.addEventListener('click',(e)=>{
 
    if(e.target.className == "close-suger"){
        input_search.value = "";
        ctn_suger.innerHTML= "";
        document.getElementById('input-header').style.borderRadius = " 25px";
        button_seach_header.style.left = "unset";
        button_seach_header.style.right = "15px";
        ctn_suger.style.border = "none"
        eliminar_icon_close();
    }
})