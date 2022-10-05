var contenedor = document.getElementById("contenedor")
contenedor.style.marginLeft = "20%"
contenedor.style.marginRight = "20%"
contenedor.style.textAlign = "center"
contenedor.style.color = "black"
contenedor.style.marginTop = "10%"
contenedor.style.marginLeft = "25.5%"
contenedor.style.marginRight = "25.5%"
contenedor.style.backgroundColor = "green"

var numero = document.getElementById("numero")
numero.style.marginTop = "10%"
numero.addEventListener('keyup', convertir);

txtResultado = document.getElementById("resultado")

opcion1 = document.getElementById("opcion1")
opcion1.style.marginTop = "5%"
opcion1.style.color = "blue"
opcion1.addEventListener('change', convertir)
opcion2 = document.getElementById("opcion2")
opcion2.style.color = "blue"
opcion2.addEventListener('change', convertir)


var resultado

function convertir() {
    if (numero.value == '') {
        return;
    }
    num = numero.value
    num = parseFloat(num);

    
    //FAHRENHEIT      
    if (opcion1.value == "Fahrenheit" && opcion2.value == "Fahrenheit") {
        resultado = (num * 9 / 5) + 32;
        alert(num + " Fahrenheit equivalen a " + resultado + " Fahrenheit")
    }
    if (opcion1.value == "Fahrenheit" && opcion2.value == "Celsius") {
        resultado = (num - 32) * 5 / 9;
        alert(num + " Fahrenheit equivalen a " + resultado + " Celsius")
    }
    if (opcion1.value == "Fahrenheit" && opcion2.value == "Kelvin") {
        resultado = (num - 32) * 5 / 9 + 273.15;
        alert(num + " Fahrenheit equivalen a " + resultado + " Kelvin")
    }

    // CELSIUS
    if (opcion1.value == "Celsius" && opcion2.value == "Fahrenheit") {
        resultado = (num * 9 / 5) + 32;
        alert(num + " Celsius equivalen a " + resultado + " Fahrenheit")
    }
    if (opcion1.value == "Celsius" && opcion2.value == "Celsius") {
        resultado = (num - 32) * 5 / 9;
        alert(num + " Celsius equivalen a " + resultado + " Celsius")
    }
    if (opcion1.value == "Celsius" && opcion2.value == "Kelvin") {
        resultado = num + 273.15;
        alert(num + " Celsius equivalen a " + resultado + " Kelvin")
    }

    // KELVIN
    if (opcion1.value == "Kelvin" && opcion2.value == "Fahrenheit") {
        resultado = (num - 273.15) * 9 / 5 + 32;
        alert(num + " Kelvin equivalen a " + resultado + " Fahrenheit")
    }
    if (opcion1.value == "Kelvin" && opcion2.value == "Celsius") {
        resultado = num - 273.15;
        alert(num + " Kelvin equivalen a " + resultado + " Celsius")
    }
    if (opcion1.value == "Kelvin" && opcion2.value == "Kelvin") {
        resultado = num - 32 + 273.15;
        alert(num + " Kelvin equivalen a " + resultado + " Kelvin")
    }


}