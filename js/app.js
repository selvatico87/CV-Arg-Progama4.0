const botonPerfil = document.querySelector("#boton-nuevo-perfil");
const foto = document.querySelector('#foto');
const nombreCompleto = document.getElementById('#titulo-nombre-completo');



const generarPerfil = async () => {
  
    const url="https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0]

    // console.log(datos);
    foto.src = datos.picture.medium;

}
document.addEventListener("DOMContentLoaded",generarPerfil)
botonPerfil.addEventListener("click", generarPerfil);

