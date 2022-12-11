//= SessionStorage
    //* Crear el storage
    sessionStorage.setItem('seleccionados', [1,2,3]);
    sessionStorage.setItem('esValido', false);
    sessionStorage.setItem('email', 'info@email.com');


    //* Obtener valores del storage
    let lista   =  sessionStorage.getItem('seleccionados').split(",");
    let esValid = (sessionStorage.getItem('esValido') == 'true');
    let email   =  sessionStorage.getItem('email');

//= Recorrer el Storage
for (let i = 0; i < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ sessionStorage.getItem(clave));
}

//= Eliminar datos del storage
sessionStorage.removeItem('esValido'); // elimina individualmente
localStorage.clear() // borra todos
