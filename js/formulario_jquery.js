$('#btnIngresar').on('click', function () {

    var username, password;
    username = $("#username").val();
    password = $("contraseña").val();

    

    if (username == "") {
        alert("Porfavor ingrese un usuario y contraseña valida");
        return false;

    } 

    
});
