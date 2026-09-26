document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    // Verificar que el formulario exista
    if (!form) {
        console.error("No se encontró el formulario #contactForm");
        return;
    }

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const servicio = document.getElementById("servicio");
    const mensaje = document.getElementById("mensaje");

    const nombreError = document.getElementById("nombreError");
    const emailError = document.getElementById("emailError");
    const servicioError = document.getElementById("servicioError");
    const mensajeError = document.getElementById("mensajeError");

    const formSuccess = document.getElementById("formSuccess");


    // Validar correo
    function correoValido(correo) {
        const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return patron.test(correo);
    }


    // Cuando se envía el formulario
    form.addEventListener("submit", function (event) {

        // IMPORTANTE:
        // Evita que el formulario recargue la página
        event.preventDefault();

        // Limpiar errores anteriores
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

        let formularioValido = true;


        // 
        // VALIDAR NOMBRE
        // 

        if (nombre.value.trim() === "") {

            nombreError.textContent =
                "Por favor, escribe tu nombre.";

            nombre.classList.add("input-error");

            formularioValido = false;
        }


        // 
        // VALIDAR CORREO
        // 

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


        // 
        // VALIDAR SERVICIO
        // 

        if (servicio.value === "") {

            servicioError.textContent =
                "Selecciona una opción.";

            servicio.classList.add("input-error");

            formularioValido = false;
        }


        // 
        // VALIDAR MENSAJE
        // 

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


        // 
        // RESULTADO
        // 

        if (formularioValido) {

            formSuccess.textContent =
                "✓ Solicitud enviada correctamente. " +
                "Nos pondremos en contacto contigo.";

            formSuccess.classList.add("show");

            // Limpiar formulario
            form.reset();

            console.log("Formulario válido");
        }

    });


    // 
    // QUITAR ERROR DEL NOMBRE
    // 

    nombre.addEventListener("input", function () {

        if (nombre.value.trim() !== "") {

            nombre.classList.remove("input-error");
            nombreError.textContent = "";
        }

    });


    // 
    // QUITAR ERROR DEL CORREO
    // 

    email.addEventListener("input", function () {

        if (correoValido(email.value.trim())) {

            email.classList.remove("input-error");
            emailError.textContent = "";

        }

    });


    // 
    // QUITAR ERROR DEL SERVICIO
    // 

    servicio.addEventListener("change", function () {

        if (servicio.value !== "") {

            servicio.classList.remove("input-error");
            servicioError.textContent = "";
        }

    });


    // 
    // QUITAR ERROR DEL MENSAJE
    // 

    mensaje.addEventListener("input", function () {

        if (mensaje.value.trim().length >= 10) {

            mensaje.classList.remove("input-error");
            mensajeError.textContent = "";
        }

    });

});
