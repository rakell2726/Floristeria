const Users = [
    {user: "Pikachu", password:"pikachu1234"},
    {user: "Bulbasaur", password:"bulbasaur1234"}
];

function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario=="" || contraseña=="") {
        alert("los campos son obligatorios...por favor digite los campos ")
    }else{
        if (usuario==Users.user.value && contraseña == Users.password.value) {
            window.location.href ="pagina2.html"
            
        }else{
            alert ("lo siento no estas en la base de datos ");
        }
    }
    
}