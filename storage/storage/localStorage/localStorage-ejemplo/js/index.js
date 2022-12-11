// agregar una clave
document.getElementById('agregar').addEventListener('click',function(){
    let clave = document.getElementById('clave').value;
    let valor = document.getElementById('valor').value;

    if(clave !==''){
        if(localStorage.getItem(clave)){
            document.getElementById('mensaje').innerText ="La clave fue editada";
        }else{
            document.getElementById('mensaje').innerText ="La clave fue registrada";
        }
        localStorage.setItem(clave,valor)
    }else{
        document.getElementById('mensaje').innerText ="La clave esta vacia";
    }

});

// eliminar una clave
document.getElementById('eliminar').addEventListener('click',function(){
    let clave = document.getElementById('clave').value;
    if(localStorage.getItem(clave)){
        // vamos a borrarla
        localStorage.removeItem(clave);
        document.getElementById('mensaje').innerText ="La clave fue eliminada";
    }else{
        // vamos a mostrar un mensaje
        document.getElementById('mensaje').innerText ="La clave no existe";
    }
    
})

// mostrar resultados
document.getElementById('mostrar').addEventListener('click',function(){
    console.log('entra')
    const datos = document.getElementById('datos'); // donde se muestra el resultado
    let tabla = document.createElement('table');
    datos.innerHTML = ''
    let header = tabla.createTHead();
    let filaHeader = header.insertRow(0);
    let columnaIzquierda = filaHeader.insertCell(0);
    let columnaDerecha = filaHeader.insertCell(1);
    columnaIzquierda.innerHTML = "<b>Descripción</b>";
    columnaDerecha.innerHTML = "<b>Total del Gasto</b>";
        
    for (let index = 0; index < localStorage.length; index++) {
        let clave = localStorage.key(index);
        let fila = document.createElement('tr');
        fila.innerHTML = `<td>${clave}</td>
                        <td>$ ${localStorage.getItem(clave)}</td>`;
                    
        tabla.append(fila);
        datos.append(tabla)
        
    }
    
})


// elimina TODAS las claves
document.getElementById('limpiar').addEventListener('click',function(){
    localStorage.clear();
    document.getElementById('datos').innerHTML ="";
    document.getElementById('mensaje').innerText ="Todas las claves fueron eliminadas";
})