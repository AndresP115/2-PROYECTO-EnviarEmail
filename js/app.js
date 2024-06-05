
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    // Cuando el usuario sale de un campo a otro
    inputEmail.addEventListener('blur', validar );
    inputAsunto.addEventListener('blur', validar );
    inputMensaje.addEventListener('blur', validar );

    function validar(e) {
        console.log()
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El imail no es válido', e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement);
    }

    //Mostrar altera
    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia)
       

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center'); // Tailwind-css

        // Inyectar el error en el formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email)
        return resultado
    }



});

//trim() Elimina todos los espacios en blanco





