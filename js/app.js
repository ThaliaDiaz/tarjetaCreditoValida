var numCard=prompt("Ingrese su numero de tarjeta");

if(numCard.length==0 || typeof(numCard)!=='number'){
    var numCard=prompt("Ingrese su numero de tarjeta");
}
var isValidCard= function(numCard){
     var str=numCard.toString();
     var arr=str.split('');
     arr.reverse();
     var prod=1;
     var sum=0;

     for(var i=0; i<arr.length; i++){
         if(i%2===0){
             prod=arr[i]*2;
             if(prod<10){
                 arr[i]=prod;
             }else{
                 resul=Math.floor(prod/10)+(prod%10);
                 arr[i]=resul;
             }
         }
     }
     //console.log(arr);

     arr;

     for(i=0; i<arr.length; i++){
       sum=sum+arr[i];
     }
     console.log(sum);
     if(sum%10===0){
         msg=console.log("Tarjeta de crédito válida");
     }else{
         msg=console.log("Tarjeta de crédito no válida");
     }
  return msg;

}

 isValidCard(123345567768);
