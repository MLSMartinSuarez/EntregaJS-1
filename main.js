// Dando nota de examen a alumnos y segun sus notas dandoles una devolucion

alert("sistema de ingreso de alumnos, con sus correspondientes notas y dando una devolucion segun la misma")

while (true) {

    let nombre = prompt("Ingrese el nombre del alumno");

    if (nombre){
        validarDatos(nombre);
    } else {
        alert('error');
    }

    confirmacion = prompt('¿Quieres continuar? Presione OK para continuar o CANCEL para salir')

        if(confirmacion == null){

        alert('Gracias por usar nuestro sistema de calificacion');

        break
        }
    
}

function validarDatos(nombre) {

    
        let nota = parseInt(prompt (`nota del examen de ${nombre} (un numero del 1 al 10 tal como figura en el examen)`));

        if (isNaN(nota) && nota > 0 && nota <= 10 ) {

            alert('No ingresaste un numero, por favor ingrese un numero del 1 a al 10')

        } else if( nota <= 3 ){
            alert(`${nombre} la nota de ${nota} es desaprobado sin recuperatorio`);
        } 
        else if (nota < 6){
            alert(`${nombre} la nota de ${nota} es desaprobado con posibilidad de recuperatorio`);
        }
        else if (nota < 10){
            alert(`${nombre} la nota de ${nota} es aprobado, buen trabajo`);
        }
        else if (nota === 10){
            alert(`${nombre} la nota de ${nota} es sobresaliente, felicidades`);
        }
        else{
            alert(`hubo un problema a la hora de insertar la nota de ${nombre}, por favor la nota del examen debe ser un numero de 1 al 10`);
        }
        

    } 


