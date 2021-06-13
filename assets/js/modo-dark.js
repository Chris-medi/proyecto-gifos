const dark = document.getElementById('modo-dark')
const light= document.getElementById('Ligth')
const img_logo = document.getElementById('img-logo')
const burguer = document.getElementById('burguer')
const burguer_close = document.getElementById('burguer-close') 
dark.addEventListener('click',()=>{
    document.body.classList.toggle("dark")
    dark.style.display = "none";
    light.style.display = "block"
    img_logo.src = "./assets/img/Logo-modo-noc.svg"
})
light.addEventListener('click',()=>{
    document.body.classList.toggle("dark");
    dark.style.display = "block";
    light.style.display = "none"
    img_logo.src = "./assets/img/logo-mobile.svg"

})