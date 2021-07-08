const template_img = (array, destino) => {
  array.forEach((element, index) => {
    let ctn_result = document.createElement("div");
    ctn_result.className = `ctn-result hg${index} `;

    let img = document.createElement("img");
    img.src = element.images.fixed_height.url;
     img.className = `img${index}`

    let ctn_icon = document.createElement("div");
    ctn_icon.className = "ctn-icon";

    let icon_like = document.createElement("img");
    icon_like.className = "like";
    icon_like.setAttribute('id',element.id)
    icon_like.src = "assets/img/icon-fav.svg";
    ctn_icon.appendChild(icon_like);

    let icon_big = document.createElement("img");
    icon_big.className = "big";
    icon_big.setAttribute('id',element.id)
    icon_big.src = "assets/img/icon-max-normal.svg";
    ctn_icon.appendChild(icon_big);

    let ctn_down = document.createElement('a');
    // ctn_icon.className = "icon"
    ctn_down.href = element.images.downsized.url;
    ctn_down.download = true;
    ctn_down.target = "-blank"
    let icon_down = document.createElement("img");
    icon_down.className = "download";
    icon_down.src = "assets/img/icon-download.svg";
    ctn_down.appendChild(icon_down)
    ctn_icon.appendChild(ctn_down);

    let gif = document.createElement("span");
    gif.className = "title-gif";
    gif.textContent = element.title;
    
    let autor = document.createElement("span");
    autor.className = "title-autor";
    autor.textContent = element.username ;

    ctn_result.appendChild(img);
    ctn_result.appendChild(ctn_icon);
    ctn_result.appendChild(autor);
    ctn_result.appendChild(gif);

    destino.appendChild(ctn_result);
  })

};

// template de maximo

const template_big = (objeto)=>{

  let fixed = document.createElement('div')
  fixed.className = "fixed"
  fixed.setAttribute('id',"ampliar")

  let div = document.createElement('div');
  div.className = "complet";
  let img_close = document.createElement('img')
  img_close.className = "close-big"
  img_close.src  = "assets/img/close.svg"

  let aside = document.createElement('div')
  aside.className = "ctn-extra"

  let img = document.createElement('img');
  img.className = "img-complet"
  img.src = objeto.images.original.url

  let container_informacion = document.createElement('div');
  container_informacion.className = "ctn-informacion";

  let title = document.createElement('span');
  title.className = "title-big";
  title.textContent = objeto.title

  let autor = document.createElement('span');
  autor.className = " autor-big"
  autor.textContent = objeto.username

  container_informacion.appendChild(autor);
  container_informacion.appendChild(title);

  let container_img = document.createElement('div');
  container_img.className = "ctn-img"

  let img_like = document.createElement('img');
  img_like.className = "like";
  img_like.src = "assets/img//icon-fav.svg"
  img_like.setAttribute('id',objeto.id)
  
  console.log(objeto.id)

  let img_down = document.createElement('img');

  img_down.className = "download";
  img_down.src = "assets/img/icon-download.svg"
  let ctn_down = document.createElement('a');

    ctn_down.href = objeto.images.downsized.url;
    ctn_down.download = true;
    ctn_down.target = "-blank"
  ctn_down.appendChild(img_down)
  
  container_img.appendChild(img_like)
  container_img.appendChild(ctn_down)
  
  aside.appendChild(container_informacion)
  aside.appendChild(container_img)


  div.appendChild(img)
  div.appendChild(aside)

  
  fixed.appendChild(div)
  fixed.appendChild(img_close)
  document.body.appendChild(fixed)

}



const template_gifos_creados = (arrays,destino)=>{
  
    arrays.forEach((element, index) => {
      let ctn_result = document.createElement("div");
      ctn_result.className = `ctn-result hg${index} `;
  
      let img = document.createElement("img");
      img.src = element.images.fixed_height.url;
       img.className = `img${index}`
  
      let ctn_icon = document.createElement("div");
      ctn_icon.className = "ctn-icon";
  
      let icon_like = document.createElement("img");
      icon_like.className = "trash";
      icon_like.setAttribute('id',element.id)
      icon_like.src = "assets/img/icon-trash-normal.svg";
      ctn_icon.appendChild(icon_like);
  
      let icon_big = document.createElement("img");
      icon_big.className = "big";
      icon_big.setAttribute('id',element.id)
      icon_big.src = "assets/img/icon-max-normal.svg";
      ctn_icon.appendChild(icon_big);
  
      let ctn_down = document.createElement('a');
      // ctn_icon.className = "icon"
      ctn_down.href = element.images.downsized.url;
      ctn_down.download = true;
      ctn_down.target = "-blank"
      let icon_down = document.createElement("img");
      icon_down.className = "download";
      icon_down.src = "assets/img/icon-download.svg";
      ctn_down.appendChild(icon_down)
      ctn_icon.appendChild(ctn_down);
  
      let gif = document.createElement("span");
      gif.className = "title-gif";
      gif.textContent = element.title;
      
      let autor = document.createElement("span");
      autor.className = "title-autor";
      autor.textContent = element.username ;
  
      ctn_result.appendChild(img);
      ctn_result.appendChild(ctn_icon);
      ctn_result.appendChild(autor);
      ctn_result.appendChild(gif);
  
      destino.appendChild(ctn_result);
    })

}

