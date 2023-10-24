// login




//esta funcion guarda los datos automaticamente
function guardaDatos(user){
	var usuario = {
		uid:user.uid,
		nombre:user.displayName,
		email:user.email,
		foto:user.photoURL
	}
	firebase.database().ref("Usuarios/"+user.uid)
	.set(usuario)
}

$('#register').click(function(){
	
	    
		window.location= '/Estudiante/Registro.html'

		
});


//Aqui estoy leyendo de la base de datos











