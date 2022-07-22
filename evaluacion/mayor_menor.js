function mayor_menor(){

    var a =  document.getElementById ('n1').value;
    var b =  document.getElementById ('n2').value;
    var c = n1 & n2;
    
    
  

    if (a<b ){
     alert("numero menor es:"+a);
     
        }

    else if (b<a ){
        alert ("numero menor es:"+b);
        }
   
    if (a>b ){ 
        alert  ("numero mayor es:"+a);
    }

    else if (b>a ){
       alert("numero mayor es :"+b);
         }

    else if (a==b){
        alert("los numeros ingresados son iguales"+a);

    }









}