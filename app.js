// funcion que carga las animaciones de las habilidades
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

    })
}
//Funcion para filtrar las categorias de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
} 

//Funcion que detecta cuando lanzar la animacion de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("chart");
        habilidades[0].classList.add("chart1");
        habilidades[1].classList.add("chart2");
        habilidades[2].classList.add("chart3");
        habilidades[3].classList.add("chart4");
        habilidades[4].classList.add("chart5");
        habilidades[5].classList.add("chart6");

        cargarAnimaciones();
    }
}


//detecto el scrolling para aplicar la animacion de las habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//funcion que muestra el menu responsive
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuado se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else
    x.className=";"
}

//Este codigo es para agregar una funcion a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}

// Función para enviar el mensaje y limpiar los campos
function sendMessage(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    alert("¡Gracias por tu mensaje!");
    clearFields(); // Limpia los campos después de mostrar el mensaje
}

// Función para limpiar los campos del formulario
function clearFields() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("mensaje").value = "";
}

// Detecta el scrolling para aplicar la animación de las habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Otras funciones aquí...
// Obtener todos los enlaces "Leer Más"
var enlacesLeerMas = document.querySelectorAll('.servicios .card #leer-mas');

// Iterar sobre cada enlace "Leer Más"
enlacesLeerMas.forEach(function(enlace) {
    // Agregar un evento de clic a cada enlace
    enlace.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        var textoCorto = this.previousElementSibling; // Obtener el párrafo de texto corto
        var card = this.closest('.card'); // Obtener el contenedor de la tarjeta

        // Si el texto corto está visible
        if (textoCorto.style.maxHeight !== 'none') {
            // Mostrar todo el texto
            textoCorto.style.maxHeight = 'none';
            card.style.height = 'auto'; // Establecer la altura automática
            this.textContent = 'Leer Menos'; // Cambiar el texto del enlace a "Leer Menos"
        } else {
            // Ocultar el texto que sobra
            textoCorto.style.maxHeight = '100px'; // Establecer la altura máxima original
            card.style.height = '400px'; // Establecer la altura original de la tarjeta
            this.textContent = 'Leer Más'; // Cambiar el texto del enlace a "Leer Más"
        }
    });
});




