//= JSON

    //+ Ejemplo 1 - LocalStorage
    const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    //Almacenar producto por producto
    for (const producto of productos) {
        guardarLocal(producto.id, JSON.stringify(producto));// persistimos uno a uno
    }

    // o almacenar array completo
    localStorage.setItem("listaProductos", JSON.stringify(productos)); // persistimos todos los elementos del arreglo


     //+ Ejemplo 2 

    class Producto {
        constructor(obj) {
            this.nombre  = obj.producto.toUpperCase();
            this.precio  = parseFloat(obj.precio);
        }
        sumaIva() {
            this.precio = this.precio * 1.21;
        }
    }
    //Obtenemos el listado de productos almacenado
    const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
    const newproductos = [];
    //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
    for (const objeto of almacenados)
        newproductos.push(new Producto(objeto));
    //Ahora tenemos objetos productos y podemos usar sus métodos
    for (const producto of newproductos)
        producto.sumaIva();
    
    console.log(newproductos)