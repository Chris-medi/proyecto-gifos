const ctn_Crear_gifos = document.getElementById('containerCrearGifos');
const btn_comenzar = document.getElementById('buttonCrear');
const text_title = document.getElementById('text-title');
const video_record = document.getElementById('video_record');
const cuadro_title = document.getElementById('cuadro-title-crear')
const paso_one = document.getElementById('one');
const paso_two = document.getElementById('two');
const paso_three = document.getElementById('three');
const container_camare = document.getElementById('captura-video')

//botones paso
const btn_grabar = document.getElementById(('grabar'));
const btn_finalizar = document.getElementById(('finalizar'));
const btn_subir = document.getElementById(('subir'));

//minutos segundos
const time = document.getElementById('time')


var gifos_upload = [] ; //almaceno todos los gifos subidos 
let recordblod;
let mediaRecord;
let recorder
let form = new FormData()
let texto = `
                <h2 class="h2-crear-gif m-b" id="text-title">¿Nos das acceso 
                a tu cámara? </h2>
                    <p>El acceso a tu camara será válido sólo
                    por el tiempo en el que estés creando el GIFO.
                    </p>
`;
const repetir = `<span class="underline m-b repeart" onclick="reiniciar()">REPETIR CAPTURAD</span>`

//comenzar pidieno permisos
btn_comenzar.addEventListener('click', async () => {
    cuadro_title.innerHTML = texto
    btn_comenzar.style.display = "none"
    paso_one.style.background = "#572EE5";
    paso_one.style.color = "#fff";

    await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
            cuadro_title.style.display = "none"
            let video = document.createElement('video');
            video_record.appendChild(video);
            video.srcObject = stream;
            video.play();
            btn_grabar.style.display = "inline";
            mediaRecord = stream
            paso_one.style.background = "#fff";
            paso_one.style.color = "#572ee5";
            paso_two.style.background = "#572EE5";
            paso_two.style.color = "#fff";
        })
        .catch((err) => {
            console.log("no aprovado " + err)
        })
        alert("Para que la apliacion funcione debes estar conectado a internet")
});



//comenzar grabacion 
btn_grabar.addEventListener('click', (e) => {
    btn_grabar.style.display = "none";
    btn_finalizar.style.display = "inline";
    try{
        recorder = new RecordRTC(mediaRecord, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240
        })
        recorder.startRecording();
    }catch(err){
        cuadro_title.innerHTML = `
        <div class="load fx-center">
            <span class="loading m-b">ERROR!!</span>
            <span>No hay internet y no se puede realizar la grabacion</span>
        </div>
        `
    }
    start_time()

})

//finalizar grabacion
btn_finalizar.addEventListener('click', () => {
    stop_time();
    mediaRecord.stop()
    btn_finalizar.style.display = "none";
    btn_subir.style.display = "inline"
    recorder.stopRecording(() => {
        recordblod = recorder.getBlob()
        console.log(recordblod)
        let preview = document.createElement('img');
        video_record.innerHTML = "";
        preview.src = window.URL.createObjectURL(recordblod);
        video_record.appendChild(preview);
    })
    paso_two.style.background = "#fff";
    paso_two.style.color = "#572ee5";
    paso_three.style.background = "#572ee5";
    paso_three.style.color = "#fff";
    time.innerHTML = repetir;

})






let text = "";//text para compartir
btn_subir.addEventListener('click', () => {
    cuadro_title.style.display="flex";
    cuadro_title.innerHTML = loading;
    form.append('file', recordblod, 'miGif.gif');
    const key_api = "HIz3J8JGmxviwwFQBAi9X5WTniL2kSkm";
    const url_upload = `https://upload.giphy.com/v1/gifs?api_key=${key_api}`
    fetch(url_upload,{
        method: "POST",
        body:form,
        json:true
    })
    .then(result => result.json())
    .then ((resp)=>{
        const url_id = `https://api.giphy.com/v1/gifs/${resp.data.id}?api_key=${key_api}`;
        fetch(url_id)
        .then(res=> res.json())
        .then(result =>{
            let save =  result.data
            gifos_upload.push(save);
            text = result.data.url;
            localStorage.setItem('gifos-upload',JSON.stringify(gifos_upload))
        })
        cuadro_title.innerHTML = `
        <div class="load fx-center">
            <div class="acciones"> 
            <img class="down-upload" onclick="recorder.save()" src="assets/img/icon-download.svg" alt="">
            <img src="assets/img/icon-link-normal.svg" onclick="copiar_papelera(${text})" alt="" class="share-upload">
            </div>
            <img  class="" src="assets/img/ok.svg">
            <span class="loading m-b">GIFO subido con exito</span>
        </div>
        `
    })
    .catch(err=>{
        cuadro_title = `
        <div class="load fx-center">
            <img  class="spinner" src="assets/img/close-modo-noct.svg">
            <span class="loading m-b">Error!! intente nuevamente</span>100
        </div>
        `
    })
})

//crear cronometro
let h = 0;
let m = 0;
let s = 0
let stop = true;
let id
const start_time = () => {
    stop = true
    if (stop) {
        id = setInterval(() => {
            if (m == 60) { h++; m = 0; }
            if (s == 60) { m++; s = 0; }
            s++
            time.innerHTML = `${h}:${m}:${s}`
        }, 1000);
    }
}
const stop_time = () => {
    stop = false;
    clearInterval(id);
}





//reiniciar captura
const reiniciar = async () => {
    h  = 0;
    m = 0;
    s = 0
    video_record.innerHTML = "";
    time.innerHTML = "";
    paso_three.style.background = "#fff";
    paso_three.style.color = "#572ee5";
    paso_two.style.background = "#572ee5";
    paso_two.style.color = "#fff";
    btn_subir.style.display = "none"
    btn_grabar.style.display = "inline";
    recordblod = null
    recorder = null
    mediaRecord = null
    await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
        cuadro_title.style.display = "none"
        let video = document.createElement('video');
        video_record.appendChild(video);
        video.srcObject = stream;
        video.play();
        mediaRecord = stream
    })
    .catch((err) => {
        console.log("no aprovado " + err)
    })
}




const loading = `
<div class="load fx-center">
    <img  class="spinner" src="assets/img/loader.svg">
    <span class="loading m-b"> Loading...</span>
</div>
`



const copiar_papelera = async(text)=>{
    await navigator.clipboard.writeText(text)
    .then(text=> console.log("copiado exitoso"))
}


container_camare.addEventListener('mouseover',(e)=>{
    if(e.target.className=="share-upload"){
        e.target.src = "assets/img/icon-link-hover.svg"
    }
    if(e.target.className == "down-upload"){
        e.target.src = "assets/img/icon-download-hover.svg"

    }
})

container_camare.addEventListener('mouseout',(e)=>{
    if(e.target.className=="share-upload"){
        e.target.src = "assets/img/icon-link-normal.svg"
    }
    if(e.target.className == "down-upload"){
        e.target.src = "assets/img/icon-download.svg"

    }
})