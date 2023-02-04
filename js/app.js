const botonPerfil = document.querySelector("#boton-nuevo-perfil");


const urlAPI="https://63dd824d367aa5a7a410c63d.mockapi.io/api/v1/datos";

function generarPerfil(){
    fetch(urlAPI)
        .then((res) =>res.json())
        .then(data=>{
            const aleatorio=Math.round(Math.random()*49);

            const img= document.querySelector("#foto")
            img.src = data[aleatorio].foto;

            const textoNombre= data[aleatorio].nombre;
            document.getElementById("titulo-nombre-completo").innerText=textoNombre;
            
            const textoProfesion= data[aleatorio].profesion;
            document.getElementById("titulo-profesion").innerText=textoProfesion;


    }) 
}

generarPerfil()

botonPerfil.addEventListener("click", generarPerfil());