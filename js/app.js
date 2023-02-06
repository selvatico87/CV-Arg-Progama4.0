const urlAPI="https://63dd824d367aa5a7a410c63d.mockapi.io/api/v1/datos";
const urlAPI2="https://imagecdn.app/v2/image"

function generarPerfil(){
    fetch(urlAPI)
        .then((res) =>res.json())
        .then(data=>{
            const aleatorio=Math.round(Math.random()*49);
            const ver='style.display="show"';
            const ocultar='style.display="none"'
            const heredar='style.display="inherit"'

            document.getElementById("cargando").style.display="show";
            document.getElementById("cargando").style.display="inherit";
            document.querySelector("#foto").style.display="none";
            document.getElementById("titulo-nombre-completo").style.display="none";
            document.getElementById("titulo-profesion").style.display="none";
            document.getElementById("titulo-correo").style.display="none";
            document.getElementById("titulo-telefono").style.display="none";
            document.getElementById("titulo-direccion").style.display="none";
            
            setTimeout(()=>{
                document.getElementById("cargando").style.display="none";
                
                const img= document.querySelector("#foto")
                img.src = data[aleatorio].foto;
                document.getElementById("foto").style.display="show";
                document.getElementById("foto").style.display="inherit";

                const textoNombre= data[aleatorio].nombre;
                document.getElementById("titulo-nombre-completo").innerText=textoNombre;
                document.getElementById("titulo-nombre-completo").style.display="show";
                document.getElementById("titulo-nombre-completo").style.display="inherit";

                const textoProfesion= data[aleatorio].profesion;
                document.getElementById("titulo-profesion").innerText=textoProfesion;
                document.getElementById("titulo-profesion").style.display="show";
                document.getElementById("titulo-profesion").style.display="inherit";

                const textoCorreo= data[aleatorio].email;
                document.getElementById("titulo-correo").innerText=textoCorreo;
                document.getElementById("titulo-correo").style.display="show";
                document.getElementById("titulo-correo").style.display="inherit";

                const textoTelefono= data[aleatorio].telefono;
                document.getElementById("titulo-telefono").innerText=textoTelefono;
                document.getElementById("titulo-telefono").style.display="show";
                document.getElementById("titulo-telefono").style.display="inherit";

                const textoDireccion= data[aleatorio].direccion+", "+data[aleatorio].ciudad;
                document.getElementById("titulo-direccion").innerText=textoDireccion;
                document.getElementById("titulo-direccion").style.display="show";
                document.getElementById("titulo-direccion").style.display="inherit";

            },3000)
            
            
    }) 
}

generarPerfil()

function enviar(){
  
    document.getElementById("alerta-enviado").style.display="show",
    document.getElementById("alerta-enviado").style.display="inherit"
    setTimeout(() => {
        document.getElementById("alerta-enviado").style.display="none"
    },5000);

}

