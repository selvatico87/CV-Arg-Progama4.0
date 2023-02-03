// const botonPerfil = document.querySelector("#boton-nuevo-perfil");
// const foto = document.querySelector('#foto');
// const nombreCompleto = document.getElementById('#titulo-nombre-completo');



// const generarPerfil = async () => {
  
//     const url="https://63dd824d367aa5a7a410c63d.mockapi.io/api/v1/datos";
//     const respuesta = await fetch(url);
//     const perfil = await respuesta.json();
//     const datos = perfil[random]

//     // console.log(datos);
//     foto.src = datos.picture.medium;

// }
// document.addEventListener("DOMContentLoaded",generarPerfil)
// botonPerfil.addEventListener("click", generarPerfil);

const urlAPI="https://63dd824d367aa5a7a410c63d.mockapi.io/api/v1/datos";


   fetch(urlAPI)
    .then((res) =>res.json())
    .then(data=>{
        const img= document.querySelector("#foto")
        img.src = data[ Math.round(Math.random()*49)].foto;
        
    }) 



// const HTMLResponse=document.querySelector;    