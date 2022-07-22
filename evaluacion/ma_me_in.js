function ma_me_in(){

    var a =  document.getElementById ('n1').value;
    var b =  document.getElementById ('n2').value;
    var c =  document.getElementById ('n3').value;


    if (a<b & a<c  ){ alert ("el numero menor es:"+a)}
    
    else if (b<a & b<c ){ alert ("el numero menor es:"+b)}
   
    else if (c<a  & c<b ) { alert ("el numero menor es:"+c)}

   
    if (a>b  & a<c  )  { alert ("el numero intermedio es:"+a)}

    else if (b>a  & b<c ){ alert ("el numero intermedio es:"+b)}
    else if (c>a  & c<b ){ alert ("el numero intermedio es:"+c)}

   
    
    if (a>b & a>c ){ alert ("el numero mayor es:"+a)}
    else if (b>a & b>c  ){ alert ("el numero mayor es:"+b)}
    else if (c>a & c>b ) { alert ("el numero mayor es:"+c)}

    }
