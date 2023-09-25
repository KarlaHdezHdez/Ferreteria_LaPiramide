//VER PERFIL DE USUARIO
async function consultar(){

    fetch("http://localhost/webservices/consultarPerfil.php")
    .then(respuesta=>respuesta.json())
    .then(registros=>{
        const res=document.getElementById('respuesta')
        registros.forEach(renglon => {
            res.innerHTML+='<p>'+renglon.nombre+' '+renglon.apellidos+' '+renglon.fecNac+' '+renglon.ciudad+' '+renglon.cp+' '+renglon.telefono+' '+renglon.contraseña+' '+renglon.correo+'<p>'
        })
    })
}



//INSERTAR - Crear cuenta
async function insertar(){
    const datos = new FormData(document.getElementById('cuenta'));
    fetch("http://localhost/webservices/insertarUsuario.php",{method:'POST',body:datos})
    .then(respuesta=>respuesta.json())
    .then(registros=>{
        if(registros.response=='1')
            alert("Registro agregado correctamente");
        else
            alert("Algo anda mal, no se agregó el registro");
    })
}


//MODIFICAR  -  Modificar cuenta 
/*
async function Editar(){
    const datos2 = new FormData(document.getElementById('formulario2'));
    fetch("http://localhost/webservices/peditar.php",{method:'POST',body:datos2})
    .then(respuesta=>respuesta.json())
    .then(registros=>{
        if(registros.response=='1')
            alert("Registro modificado correctamente");
        else
            alert("Algo anda mal, no se modificó el registro");
    })
}
*/