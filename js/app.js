// const botonPerfil = document.querySelector("#boton-nuevo-perfil");
// const nombreCompleto = document.getElementById('#titulo-nombre-completo');


const urlAPI="https://63dd824d367aa5a7a410c63d.mockapi.io/api/v1/datos";


fetch(urlAPI)
    .then((res) =>res.json())
    .then(data=>{
        const img= document.querySelector("#foto")
        img.src = data[ Math.round(Math.random()*49)].foto;
        
}) 

// document.addEventListener("DOMContentLoaded",generarPerfil)
// botonPerfil.addEventListener("click", generarPerfil);