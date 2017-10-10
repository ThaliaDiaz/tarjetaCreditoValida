//Pido ingreso de un numero de tarjeta al usuario
var numCard=prompt("Ingrese su numero de tarjeta");
//Valido que el usuario solo ingrese numeros, que no acepte espacios en blanco, si ingresa algo distingto a numeros
//vuelve a pedirme el ingreso
if(numCard.length==0 || typeof(numCard)==='NaN'|| numCard==' '){
    prompt("Ingrese su numero de tarjeta");
}else{
  console.log('Número ingresado es: '+numCard);
}
//Creo mi funcion para validar la tarjeta de acuerdo al número ingresado
var isValidCard= function(numCard){
//declaración de mis  variables
    //convertir el número ingresado en una cadena
     var str=numCard.toString();
    //me sirve para separar cada digito de el numero que en este caso esta en cadena y mostrarlo en un array
     var arr=str.split('');
    //invierte el array
     arr.reverse();
    //Inicializo las variables que luego utilizaré
     var prod=1;
     var sum=0;
    //Recorro mi arreglo posición a posición para realizar el algoritmo de Luhn
     for(var i=0; i<arr.length; i++){
       //Determino si una posición es par
         if(i%2===0){
           //Asigno a prod el valor del número en la posición i multiplicada por dos
             prod=arr[i]*2;
           //Si el prod es menor que 10 entra y se asigna ese valor en reemplazo de el elemento que esta en la posicion i del arreglo
             if(prod<10){
                 arr[i]=prod;
             }else{
                  // si no se cumplió la condición anterior entonces prod>=10 por lo tanto realizo la operación de acuerdo al
                 // algoritmo de luhn
                 resul=Math.floor(prod/10)+(prod%10);
                 // Asigno el valor de mi resul al elemento en la posicion i del array
                 arr[i]=resul;
             }
         }
     }
     //muestro mi nuevo arreglo
     console.log(arr);
    //sumo cada elemento del arreglo actual y lo almaceno en sum
     for(i=0; i<arr.length; i++){
       sum=sum+arr[i];
     }
     //muestro mi suma total
     //console.log(sum);
     //Pregunta si la suma del arreglo actual es divisible entre 10
     if(sum%10===0){
        //Si es divisible muestra que es un  tarjeta válida.
         msg="Tarjeta de crédito válida";
     }else{
        //Si no es divisible entre 10 muestra tarjeta no válida
         msg="Tarjeta de crédito no válida";
     }
  //Retorna el mensaje que esta almacenado en msg
  return msg;
}

 document.write(isValidCard(numCard));
