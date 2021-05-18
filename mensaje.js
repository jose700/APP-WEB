//funcion para enviar un mensaje una vez registrado el usuario
function myFunction() {
    var enviar = "Te has registrado exitosamente";
    alert(enviar);
}
/*funcion para poder visualizar la contraseña al hacer click en el icono
agregamos una condicion para poder hacer la vizualizacion viceverza
*/
function mostrarPassword() {
    var cambio = document.getElementById("txtPassword");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

$(document).ready(function() {
    //CheckBox mostrar contraseña
    $('#ShowPassword').click(function() {
        $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});
