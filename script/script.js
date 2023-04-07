let buttonStart = document.getElementById("empezarTest");
let menu = document.getElementById("menu");
let preguntas = document.getElementById("preguntas");
let enviarRespuestas = document.getElementById("enviarRespuestas");
let mostrarPersonaje = document.getElementById("mostrarPersonaje");
let volverIntentar = document.getElementById("volverIntentar");
let formulario = document.getElementById("formulario");




buttonStart.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("ocultarLento");
    preguntas.style.display = "flex";
    
})

enviarRespuestas.addEventListener("click", e => {
    e.preventDefault()
    preguntas.classList.toggle("ocultarLento");
    mostrarPersonaje.style.display = "flex"
})

volverIntentar.addEventListener("click", e => {
    setTimeout(() => {
        location.reload()
    }, 1000);
})



var personajes = {
    BobEsponja: 0,
    Patricio: 0,
    Calamardo: 0,
    Arenita: 0,
    Plancton: 0,
    DonCangrejo: 0,
    Perlita: 0,
    Gary: 0

}
// console.log(personajes.BobEsponja+1)



enviarRespuestas.addEventListener("click", e => {
    // RESPUESTA 1
    const primerPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < primerPregunta.length; i++) {
        if(primerPregunta[i].checked) {
            var respuesta1 = primerPregunta[i].value
            break;
        }
    }
    if(respuesta1 == 1) {
        personajes.DonCangrejo += 1;
    }

    else if(respuesta1 == 2) {
        personajes.Plancton += 1
        
    }

    else if(respuesta1 == 3) {
        personajes.Calamardo += 1
    }

    else if(respuesta1 == 4) {
        personajes.Arenita += 1
    }

    // RESPUESTA 2
    const segundaPregunta = document.querySelectorAll('#p1 input[type="radio"]');

    for(let i = 0; i < segundaPregunta.length; i++) {
        if(segundaPregunta[i].checked) {
            var respuesta2 = segundaPregunta[i].value
            break;
        }
    }
    if(respuesta2 == 1) {
        personajes.BobEsponja += 1;
    }

    else if(respuesta2 == 2) {
        personajes.Patricio += 1
        
    }

    // RESPUESTA 3
    const terceraPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < terceraPregunta.length; i++) {
        if(terceraPregunta[i].checked) {
            var respuesta3 = terceraPregunta[i].value
            break;
        }
    }
    if(respuesta3 == 1) {
        personajes.DonCangrejo += 1;
    }

    else if(respuesta3 == 2) {
        personajes.Arenita += 1
        
    }

    // RESPUESTA 4
    const cuartaPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < cuartaPregunta.length; i++) {
        if(cuartaPregunta[i].checked) {
            var respuesta4 = cuartaPregunta[i].value
            break;
        }
    }
    if(respuesta4 == 1) {
        personajes.Calamardo += 1;
    }

    else if(respuesta4 == 2) {
        personajes.Perlita += 1
        
    }

    // RESPUESTA 5
    const quintaPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < quintaPregunta.length; i++) {
        if(quintaPregunta[i].checked) {
            var respuesta5 = quintaPregunta[i].value
            break;
        }
    }
    if(respuesta5 == 1) {
        personajes.Calamardo += 1;
    }

    else if(respuesta5 == 2) {
        personajes.Plancton += 1
        
    }

    // RESPUESTA 6
    const sextaPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < sextaPregunta.length; i++) {
        if(sextaPregunta[i].checked) {
            var respuesta6 = sextaPregunta[i].value
            break;
        }
    }
    if(respuesta6 == 1) {
        personajes.Calamardo += 1;
    }

    else if(respuesta6 == 2) {
        personajes.Gary += 1
        
    }

    // RESPUESTA 7
    const septimaPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < septimaPregunta.length; i++) {
        if(septimaPregunta[i].checked) {
            var respuesta7 = septimaPregunta[i].value
            break;
        }
    }
    if(respuesta7 == 1) {
        personajes.Plancton += 1;
    }

    else if(respuesta7 == 2) {
        personajes.Calamardo += 1
        
    }

    // RESPUESTA 8
    const octavaPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < octavaPregunta.length; i++) {
        if(octavaPregunta[i].checked) {
            var respuesta8 = octavaPregunta[i].value
            break;
        }
    }
    if(respuesta8 == 1) {
        personajes.Gary += 1;
    }

    else if(respuesta8 == 2) {
        personajes.Patricio += 1
        
    }

    // RESPUESTA 9
    const novenaPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < novenaPregunta.length; i++) {
        if(novenaPregunta[i].checked) {
            var respuesta9 = novenaPregunta[i].value
            break;
        }
    }
    if(respuesta9 == 1) {
        personajes.BobEsponja += 1;
    }

    else if(respuesta9 == 2) {
        personajes.Arenita += 1
        
    }

    else if(respuesta9 == 3) {
        personajes.BobEsponja += 1
    }

    else if(respuesta9 == 4) {
        personajes.DonCangrejo += 1
    }

    // RESPUESTA 10
    const decimaPregunta = document.querySelectorAll('#p0 input[type="radio"]');

    for(let i = 0; i < decimaPregunta.length; i++) {
        if(decimaPregunta[i].checked) {
            var respuesta10 = decimaPregunta[i].value
            break;
        }
    }
    if(respuesta10 == 1) {
        personajes.Gary += 1;
    }

    else if(respuesta10 == 2) {
        personajes.BobEsponja += 1
        
    }

    let valorMayor = 0;
    var personaje = "";
    for(let propiedad in personajes) {
        if(personajes.hasOwnProperty(propiedad)) {
          const valor = personajes[propiedad];
          if(valor > valorMayor) {
            valorMayor = valor;
            personaje = propiedad
          }  
        } 
    }
    // Referencia al nombre e imagen que mostraremos
    let imgPersonaje = document.getElementById("imgPersonaje")
    let nombrePersonaje = document.getElementById("nombrePersonaje")
    // Bob esponja
    if(personaje == "BobEsponja") {
        imgPersonaje.src = "img/bobesponja.png";
        nombrePersonaje.textContent = "Bob Esponja"
    }

    // Patricio
    else if(personaje == "Patricio") {
        imgPersonaje.src = "img/patricio.png";
        nombrePersonaje.textContent = "Patricio Estrella"
    }

    // Calamardo
    else if(personaje == "Calamardo") {
        imgPersonaje.src = "img/calamardo.png";
        nombrePersonaje.textContent = "Calamardo"
    }

    // Arenita
    else if(personaje == "Arenita") {
        imgPersonaje.src = "img/arenita.png";
        nombrePersonaje.textContent = "Arenita"
    }

    // Plancton
    else if(personaje == "Plancton") {
        imgPersonaje.src = "img/plancton.png";
        nombrePersonaje.textContent = "Plancton"
    }

    // DonCangrejo
    else if(personaje == "DonCangrejo") {
        imgPersonaje.src = "img/doncangrejo.webp";
        nombrePersonaje.textContent = "DonCangrejo"
    }

    // Perlita
    else if(personaje == "Perlita") {
        imgPersonaje.src = "img/perlita.webp";
        nombrePersonaje.textContent = "PatricioPerlita"
    }

    // Gary
    else if(personaje == "Gary") {
        imgPersonaje.src = "img/Gary.png";
        nombrePersonaje.textContent = "Gary"
    }
})

/*

BobEsponja: 0,
    Patricio: 0,
    Calamardo: 0,
    Arenita: 0,
    Plancton: 0,
    DonCangrejo: 0,
    Perlita: 0,
    Gary: 0
    */


