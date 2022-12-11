//= Localstorage
    //* Crear el storage
    localStorage.setItem('bienvenida', '¡Hola Coder!');
    localStorage.setItem('esValido', true);
    localStorage.setItem('unNumero', 20);

    //* Obtener valores del storage
    let mensaje =  localStorage.getItem('bienvenida');
    let bandera =  localStorage.getItem('esValido');
    let numero  =  localStorage.getItem('unNumero');
