//= Objeto
    //* Ejemplo 1
    const producto1 = { id: 2, producto: "Arroz" };
    localStorage.setItem("producto1", producto1);
    console.log(localStorage.getItem('producto1'));
    const producto2 = JSON.stringify(producto1);
    localStorage.setItem("producto2", producto2);
    console.log(producto2)
    

//= JSON
    //* Notas

    //* Estructura
    // { "clave": "valor"} ==> valor = cualquier tipo de datos de js (numero,string,etc)
    //* Ejemplo de Json
   /* {
        "rojo":"#f00",
        "verde":"#0f0",
        "azul":"#00f",
        "cyan":"#0ff",
        "magenta":"#f0f",
        "amarillo":"#ff0",
        "negro":"#000"
     }
    */
    