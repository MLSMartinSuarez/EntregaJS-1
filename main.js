// Dando nota de examen a alumnos y segun sus notas dandoles una devolucion

alert("sistema de ingreso de alumnos, con sus correspondientes notas y dando una devolucion segun la misma")

for(let alumnos = 1; alumnos <= 3; alumnos++){
    let nombre = prompt("Ingrese el nombre del alumno");
    let nota = Number(prompt (`nota del examen de ${nombre} (un numero del 1 al 10 tal como figura en el examen)`));

    if(nota <=3 ){
        alert(`${nombre} la nota de ${nota} es desaprobado sin recuperatorio`);
    } 
    else if (nota < 6){
        alert(`${nombre} la nota de ${nota} es desaprobado con posibilidad de recuperatorio`);
    }
    else if (nota < 10){
        alert(`${nombre} la nota de ${nota} es aprobado, buen trabajo`);
    }
    else if (nota = 10){
        alert(`${nombre} la nota de ${nota} es sobresaliente, felicidades`);
    }
    else{
        alert(`hubo un problema a la hora de insertar la nota de ${nombre}, por favor la nota del examen debe ser un numero de 1 al 10`);
    }

}

alert("notas entregadas");