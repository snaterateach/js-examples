
let listado = document.getElementById('listado');
console.log(personajes)
const renderizaElListado = () => {
    let listadoPersonajes = JSON.parse(localStorage.getItem('personajes'));

    for (let index = 0; index < listadoPersonajes.length; index++) {
        let div = document.createElement('div');
        
        div.className ="col s4";
        div.innerHTML = ` <h2>${listadoPersonajes[index].personaje}</h2>
                            <p><img src="img/${listadoPersonajes[index].imagen}" alt=""></p>`
        listado.append(div);
     }
}

if(localStorage.getItem('personajes')){
    // llamamos a la funcion que va a construir el html
    renderizaElListado();
}else{
    localStorage.setItem('personajes',JSON.stringify(personajes))
    renderizaElListado();
}


