/* 
   JavaScript - Formulario de contacto
    */

   document.addEventListener("DOMContentLoaded", function () {

    // Obtener el formulario
    
    const form = document.getElementById("contactForm");

    // Si la página no tiene el formulario,
    // no ejecutamos el resto del código.
    if (!form) {
        return;
    }


    // Obtener los elementos del formulario
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const servicio = document.getElementById("servicio");
    const mensaje = document.getElementById("mensaje");

    // Obtener los espacios donde aparecerán
    // los mensajes de error
    const nombreError = document.getElementById("nombreError");
    const emailError = document.getElementById("emailError");
    const servicioError = document.getElementById("servicioError");
    const mensajeError = document.getElementById("mensajeError");

    // Mensaje de éxito
    const formSuccess = document.getElementById("formSuccess");


    /*
       Función para limpiar los errores
       anteriores.
    */
    function limpiarErrores() {

        nombreError.textContent = "";
        emailError.textContent = "";
        servicioError.textContent = "";
        mensajeError.textContent = "";

        nombre.classList.remove("input-error");
        email.classList.remove("input-error");
        servicio.classList.remove("input-error");
        mensaje.classList.remove("input-error");

        formSuccess.classList.remove("show");
        formSuccess.textContent = "";
    }


    /*
       Función para validar el formato
       del correo electrónico.
    */
    function correoValido(correo) {

        const patron =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        return patron.test(correo);
    }


    /*
       Evento submit:
       se ejecuta cuando el usuario
       intenta enviar el formulario.
    */
    form.addEventListener("submit", function (event) {

        // Evita que la página se recargue
        event.preventDefault();

        // Limpiamos mensajes anteriores
        limpiarErrores();

        // Variable para saber si el formulario
        // tiene errores
        let formularioValido = true;


        /* 
           VALIDAR NOMBRE
            */

        if (nombre.value.trim() === "") {

            nombreError.textContent =
                "Por favor, escribe tu nombre.";

            nombre.classList.add("input-error");

            formularioValido = false;
        }


        /* 
           VALIDAR CORREO
            */

        if (email.value.trim() === "") {

            emailError.textContent =
                "Por favor, escribe tu correo.";

            email.classList.add("input-error");

            formularioValido = false;

        } else if (!correoValido(email.value.trim())) {

            emailError.textContent =
                "Ingresa un correo electrónico válido.";

            email.classList.add("input-error");

            formularioValido = false;
        }


        /* 
           VALIDAR SERVICIO
            */

        if (servicio.value === "") {

            servicioError.textContent =
                "Selecciona una opción.";

            servicio.classList.add("input-error");

            formularioValido = false;
        }


        /* 
           VALIDAR MENSAJE
            */

        if (mensaje.value.trim() === "") {

            mensajeError.textContent =
                "Escribe un mensaje.";

            mensaje.classList.add("input-error");

            formularioValido = false;

        } else if (mensaje.value.trim().length < 10) {

            mensajeError.textContent =
                "El mensaje debe tener al menos 10 caracteres.";

            mensaje.classList.add("input-error");

            formularioValido = false;
        }


        /* 
           RESULTADO
            */

        if (formularioValido) {

            formSuccess.textContent =
                "✓ Mensaje enviado correctamente. " +
                "Nos pondremos en contacto contigo.";

            formSuccess.classList.add("show");

            // Limpiar los datos del formulario
            form.reset();

        }

    });


    /*
       Cuando el usuario modifica un campo
       que tenía error, eliminamos el borde rojo.
    */

    nombre.addEventListener("input", function () {

        if (nombre.value.trim() !== "") {

            nombre.classList.remove("input-error");
            nombreError.textContent = "";
        }

    });


    email.addEventListener("input", function () {

        if (correoValido(email.value.trim())) {

            email.classList.remove("input-error");
            emailError.textContent = "";
        }

    });


    servicio.addEventListener("change", function () {

        if (servicio.value !== "") {

            servicio.classList.remove("input-error");
            servicioError.textContent = "";
        }

    });


    mensaje.addEventListener("input", function () {

        if (mensaje.value.trim().length >= 10) {

            mensaje.classList.remove("input-error");
            mensajeError.textContent = "";
        }

    });

});
