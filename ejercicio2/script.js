let edades = [];
let contador = 0;

function validarEdad(edad) {
    return edad >= 1 && edad <= 120;
}

function agregarEdad(event) {
    event.preventDefault();
    let input = document.getElementById('ageInput');
    let edad = parseInt(input.value);

    if (validarEdad(edad)) {
        if (contador < 10) {
            edades.push(edad);
            contador++;
            input.value = '';
            actualizarResultados();

            if (contador === 10) {
                document.getElementById('ageForm').reset(); 
                document.getElementById('ageInput').disabled = true; 
                document.querySelector('button[type="submit"]').disabled = true;
                alert('Se han ingresado 10 registros de edades. No se pueden agregar más.');
            }
        } else {
            alert('Ya se han ingresado 10 registros de edades.');
        }
    } else {
        alert('Ingrese una edad válida entre 1 y 120 años.');
    }
}

function actualizarResultados() {
    let menores = edades.filter(edad => edad < 18).length;
    let mayores = edades.filter(edad => edad >= 18).length;
    let adultosMayores = edades.filter(edad => edad >= 60).length;
    let edadMin = Math.min(...edades);
    let edadMax = Math.max(...edades);
    let promedio = calcularPromedio(edades);

    document.getElementById('menores').textContent = menores;
    document.getElementById('mayores').textContent = mayores;
    document.getElementById('adultosMayores').textContent = adultosMayores;
    document.getElementById('edadMin').textContent = edadMin;
    document.getElementById('edadMax').textContent = edadMax;
    document.getElementById('promedio').textContent = promedio.toFixed(2);
}

function calcularPromedio(edades) {
    if (edades.length === 0) return 0;
    let sum = edades.reduce((acc, edad) => acc + edad, 0);
    return sum / edades.length;
}

document.getElementById('ageForm').addEventListener('submit', agregarEdad);
