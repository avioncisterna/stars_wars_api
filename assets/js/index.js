//FETCH
async function* obtenerPersonajes(desde, hasta) {
    let contador = desde;
    while (contador <= hasta) {
        const data = await fetch(`https://swapi.dev/api/people/${contador}`)
        const response = await data.json()
        yield response
        contador++
        console.log(data)
    }
}

//Generador de valores desde el FETCH
const generadorPrimero = obtenerPersonajes(1,5);
const generadorSegundo = obtenerPersonajes(6,11);
const generadorTercero = obtenerPersonajes(12,16);

//Funcion: generarCarta
async function generarCarta(resultado, div) {
    if (!resultado.done) {
    let html = div.innerHTML;
    html += `
    <div class="card">
    <h3>${resultado.value.name}</h3>
    <div class="descripcion">
    <small>AÑO DE NACIMIENTO</small>
    <p>${resultado.value.birth_year}.</p>
    <small>ALTURA</small>
    <p>${resultado.value.height} cms.</p>
    <small>PESO</small>
    <p>${resultado.value.mass} kg.</p>
    </div>
    </div> 
    `
    div.innerHTML = html;
    }
}
//Funcion: secciones
async function secciones(id) {
    let resultado = ''
    let div = ''
    switch(id) {
        case 1:
            resultado = await generadorPrimero.next()
            div = document.getElementById("resultados1");
            generarCarta(resultado,div)
            break;
        case 2:
            resultado = await generadorSegundo.next()
            div = document.getElementById("resultados2");
            generarCarta(resultado,div)
            break;
        case 3:
            resultado = await generadorTercero.next()
            div = document.getElementById("resultados3");
            generarCarta(resultado,div)
            break;
        default:
    }
}

//Función: Botón 1, 2 y 3 llaman a resultados del FETCH
let boton1 = document.getElementById("cartaObtener1")
boton1.addEventListener ('click', async() => {
    try{
        secciones(1)
    }catch(error){
        document.getElementById("resultados1").innerHTML =
        `<h4 class="error">
        ¡Error en el requerimiento!
        </h4>`;
    }
})

let boton2 = document.getElementById("cartaObtener2")
boton2.addEventListener ('click', async() => {
    try{
        secciones(2)
    }catch(error){
        document.getElementById("resultados2").innerHTML =
        `<h4 class="error">
        ¡Error en el requerimiento!
        </h4>`;
    }
})

let boton3 = document.getElementById("cartaObtener3")
boton3.addEventListener ('click', async() => {
    try{
        secciones(3)
    }catch(error){
        document.getElementById("resultados3").innerHTML =
        `<h4 class="error">
        ¡Error en el requerimiento!
        </h4>`;
    }
})

