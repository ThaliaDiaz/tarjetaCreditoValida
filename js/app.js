//solicito ingreso de numero de tarjeta al usuario
//Valido que mediante un do while que solo me ingrese números
do{
  //numCard almacena el valor del número inresado por el usuario
  var numCard=prompt("Ingrese su numero de tarjeta");
  //Separamos uno a uno la cadena de números ingresada y lo almaceno en un arreglo
  var arr=numCard.split('');
  //Determina si la primera posicion del arreglo ingresado es vacío o no se ha ingresado nada al como numCard
  // o el num ingresado no tiene 16 dígitos
  if(arr[0]==' '|| numCard==''|| numCard.length!==16 ){
    var op=false;
  }else{
  //Determina si la primera posicion del arreglo es un número si es así ingresa a ralizar toda mi función
    //El parseInt me sirve para convertir lo que hasta ahora es un digito de un número pero en cadena. Ejm "4"--> 4
    if(typeof(parseInt(arr[0]))=='number'){
      //Me muestra en la página el número de tarjeta que ingresé
      document.write('El numero de su tarjeta ingresada es: '+ numCard);
      //Creo mi funcion para validar la tarjeta de acuerdo al número ingresado
      var isValidCard= function(numCard){
        //declaración de mis  variables
        //invierte el array arr en el que tenemos cada dígito del número en una posición y lo almacena en el arreglo arrInvertido
        var arrInvertido=arr.reverse();

        //Muestro en consola el arreglo ya invertido
        console.log('este es el reverso: '+arrInvertido);
        //Inicializo las variables que luego utilizaré para almacenar el producto y la suma
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
           //si no se cumplió la condición anterior entonces prod>=10 por lo tanto realizo la operación de acuerdo al
             //algoritmo de luhn, que en este caso es sumar las cifras del prod
             resul=Math.floor(prod/10)+(prod%10);
             //Asigno el valor de mi resul al elemento en la posicion i del array
             arr[i]=resul;
           }
          }else{
            //si la posicion es impar solo lo mulplico por 1 para convertirlo a tipo de dato numerico y lo almaceno e su misma posicion
            arr[i]=arr[i]*1;
          }
        }

        //muestro mi nuevo arreglo
        console.log(arr);

        //sumo cada elemento del arreglo actual y lo almaceno en sum
        for(i=0; i<arr.length; i++){
          sum=sum+arr[i];
        }

        //muestro mi suma total
        console.log(sum);

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
      //Muestro en la página si la Tarjeta es válida o no
      document.write('<br> '+ isValidCard(numCard));
      //Muestro en la página si la Tarjeta es válida o no
      console.log(isValidCard(numCard));
      //Cambia el valor de op a verdadero y con eso termina mi ciclo while y acaba el programa
      op=true;
     }
   }
}while(op==false)
